import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initWebVitals, initImageOptimization } from "./utils/performance";

// Initialize performance monitoring
initWebVitals();
initImageOptimization();

// Hide loading spinner when React app mounts
const hideSpinner = () => {
  const spinner = document.getElementById('loading');
  if (spinner) {
    spinner.style.display = 'none';
  }
};

createRoot(document.getElementById("root")!).render(<App />);

// Hide spinner after initial render
setTimeout(hideSpinner, 100);
