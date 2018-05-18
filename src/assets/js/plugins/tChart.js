function initCheck() {
    var composeBox = document.getElementById('tTopBreak');
    if(!composeBox) {
        //The node we need does not exist yet.
        //Wait 500ms and try again
        console.log("Polling!");
        window.setTimeout(initCheck,5000);
        return;
    }else {
    console.log("LOADED");

    new Chartist.Line('tTopBreak', {
        labels: [1, 2, 3, 4],
        series: [[100, 120, 180, 200]]
      });
    // new Chartist.Bar('#tTopBreak', {
    //     series: [
    
    //     //   [this.communicationScorePerc],
    //     //   [this.criticalScorePerc],
    //     //   [this.empathyScorePerc],
    //     //   [this.globalUnderstandScorePerc],
    //     //   [this.networkingScorePerc],
    //     //   [this.designScorePerc],
    //     //   [this.perspectiveScorePerc],
    //     //   [this.managementScorePerc],
    //     //   [this.teamworkScorePerc]
    //     [10],
    //     [20],
    //     [30]
    //     ]
    //   }, {
    //     height: 70,
    //     high: 100,
    //     stackBars: true,
    //     //         plugins: [
    //     //     Chartist.plugins.legend()
    //     // ],
    //     horizontalBars: true,
    
    //     axisX: {
    //       showLabel: false,
    //       showGrid: true,
    
    //     },
    //     axisY: {
    
    //       showLabel: false,
    //       showGrid: true,
    //     }
    
    //   })
    }
}
// initCheck();

// Select the node that will be observed for mutations
var targetNode = document.getElementById('tTopBreak');

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true };

// Callback function to execute when mutations are observed
var callback = function(mutationsList) {
    // for(var mutation of mutationsList) {
    //     if (mutation.type == 'childList') {
    //         console.log('A child node has been added or removed.');
    //     }
    //     else if (mutation.type == 'attributes') {
    //         console.log('The ' + mutation.attributeName + ' attribute was modified.');
    //     }
    // }

    // new Chartist.Bar('#tTopBreak', {
    //     series: [
    
    //       [this.communicationScorePerc],
    //       [this.criticalScorePerc],
    //       [this.empathyScorePerc],
    //       [this.globalUnderstandScorePerc],
    //       [this.networkingScorePerc],
    //       [this.designScorePerc],
    //       [this.perspectiveScorePerc],
    //       [this.managementScorePerc],
    //       [this.teamworkScorePerc]
    //     ]
    //   }, {
    //     height: 70,
    //     high: 100,
    //     stackBars: true,
    //     //         plugins: [
    //     //     Chartist.plugins.legend()
    //     // ],
    //     horizontalBars: true,
    
    //     axisX: {
    //       showLabel: false,
    //       showGrid: true,
    
    //     },
    //     axisY: {
    
    //       showLabel: false,
    //       showGrid: true,
    //     }
    
    //   })
    console.log("LOADED");


};

// Create an observer instance linked to the callback function
// var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
// observer.observe(targetNode, config);
    
    