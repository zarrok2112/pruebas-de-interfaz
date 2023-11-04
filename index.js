import { Browser, Builder, By } from 'selenium-webdriver';

const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

(async () => {
  let driver;

  driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
  await delay();

  const optionThree = await driver.findElement(By.css('option[value="2"]'));
  await optionThree.click();
  await delay();

  const textArea = await driver.findElement(By.name('my-textarea'));
  await textArea.sendKeys('diabetus,the soda for the people ');
  await delay();

  const colorPicker = await driver.findElement(By.name('my-colors'));
  await colorPicker.sendKeys('#689FFF');
  await delay();

  const datePicker = await driver.findElement(By.name('my-date'));
  await datePicker.sendKeys('06/20/1980');
  await delay();

  const checkbox = await driver.findElement(By.id('my-check-1'));
  await checkbox.click();
  await delay();

  const submit = await driver.findElement(By.css('button[type="submit"]'));
  await submit.click();
  await delay();

  const submitTitle = await driver.findElement(By.className('display-6'));
  const submitTitleText = await submitTitle.getText();
  console.log(submitTitleText);
  await delay();

  const receivedMessage = await driver.findElement(By.id('message'));
  const receivedMessageText = await receivedMessage.getText();
  console.log(receivedMessageText);
  await delay();
})();