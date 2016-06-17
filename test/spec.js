
describe('Protractor Demo App', function() {
  it('should contain required object',function(){
    var arrayOfObjects = [{id:'1',name:'A'},{id:'2',name:'B'},{id:'3',name:'C'}]
    var object1 = {id:'3',name:'C'};
    var object2 = {id:'3',name:'C'};

    expect(arrayOfObjects).toContain(object2);
    console.info(arrayOfObjects);
   /* for(var item in arrayOfObjects){
      console.log(arrayOfObjects[item],arrayOfObjects[item].id,arrayOfObjects[item].name);
    }*/

  });
});


describe('Protractor Demo App', function() {
	beforeEach(function(){
		browser.get('http://localhost:3000/index');
	});
  it('should have a title', function() {
    
    expect(browser.getTitle()).toEqual('Protractor Example');
  });
  

  it('should enter text and trigger click event', function(){
    var uname = element(by.model('username'));
    uname.sendKeys('Kambagiri Swamy');
    element(by.id('b1')).click();

	var EC = protractor.ExpectedConditions;
	// Waits for an alert pops up.
	browser.wait(EC.alertIsPresent(), 5000);
  });
});