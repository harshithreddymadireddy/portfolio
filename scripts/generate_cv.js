const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function generatePdf() {
  const rootDir = path.resolve(__dirname, '..');
  const templatePath = path.join(rootDir, 'scripts', 'cv_template.html');
  const targetPdfPath = path.join(rootDir, 'assets', 'documents', 'Harshith_Reddy_Madireddy_Academic_CV.pdf');

  console.log('Starting headless Chrome for PDF generation...');
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9251',
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=850,1100'
  ]);
  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://localhost:9251/json');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page');

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        const handler = (evt) => {
          const res = JSON.parse(evt.data);
          if (res.id === msgId) {
            ws.removeEventListener('message', handler);
            if (res.error) reject(res.error);
            else resolve(res.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await new Promise(r => ws.addEventListener('open', r));
    await send('Page.enable');
    await send('Page.navigate', {
      url: 'file://' + templatePath
    });
    await new Promise(r => setTimeout(r, 1500));

    const pdfData = await send('Page.printToPDF', {
      printBackground: true,
      paperWidth: 8.5,
      paperHeight: 11,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0
    });

    fs.writeFileSync(targetPdfPath, Buffer.from(pdfData.data, 'base64'));
    console.log('Successfully compiled 2-page academic CV PDF to:');
    console.log(targetPdfPath);

    ws.close();
  } finally {
    chrome.kill();
  }
}

generatePdf().catch(console.error);
