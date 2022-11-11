import './styles/style.css';

// Required for communication with Singular Widget Library...

SingularWidget.init({
    onInit: onSingularInit,
    onValue: onSingularValue,
    onButtonClicked: onSingularButtonClicked
  });

  function onSingularInit() {
      console.log("onSingularInit"); 
  }
  
  function onSingularValue(json) {
      console.log("onSingularValue", json);
  }

  function onSingularButtonClicked(action) {
      console.log("onSingularButtonClicked", action); 

      /**
       * EXAMPLE: Send messages to the editor console
       * Message types: info, warning and error
       */
      SingularWidget.log.info({
          title: 'My Widget',
          description: 'Hello Singular!'
      });
  }

  console.log('widget loaded loaded');
