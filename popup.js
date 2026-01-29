document.getElementById('toggleBtn').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleDarkMode
  });
});

function toggleDarkMode() {
  const styleId = 'custom-dark-mode-style';
  const existingStyle = document.getElementById(styleId);
  
  if (existingStyle) {
    // Remove dark mode
    existingStyle.remove();
  } else {
    // Add dark mode
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      * {
        background-color: #0d0d0e !important;
        color: #fff !important;
      }
    `;
    document.head.appendChild(style);
  }
}