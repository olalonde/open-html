/**
Opens an HTML string in a web browser. Useful for debugging while writing web scraping code.
@example
```
import openHtml from 'open-html';
openHtml("<html><head></head><body>just testing</body></html>");
```
*/
declare function openHtml(html: string): Promise<void>;
export = openHtml;
