import { Browser, Builder, By } from 'selenium-webdriver';

const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

(async () => {
  let driver;

  driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
  await delay();

  const textArea = await driver.findElement(By.name('my-textarea'));
  await textArea.sendKeys('anita lava la tina.');
  await delay();

  const optionThree = await driver.findElement(By.css('option[value="3"]'));
  await optionThree.click();
  await delay();

  const colorPicker = await driver.findElement(By.name('my-colors'));
  await colorPicker.sendKeys('#20A722');
  await delay();

  const datePicker = await driver.findElement(By.name('my-date'));
  await datePicker.sendKeys('08/16/1970');
  await delay();

  const checkbox = await driver.findElement(By.id('my-check-2'));
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
