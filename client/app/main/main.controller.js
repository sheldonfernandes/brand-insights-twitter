'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];
    this.tabData   = [
      {
        heading: '<div class="tab-header">Overview</div>'+
                  '<div class="tab-subheader">Total branding impressions</div>'+
                  '<div class="tab-result-summary">16.2M</div>',
        route:   'main.overview'
      },
      {
        heading: '<div class="tab-header">Share of Conversation</div>'+
                  '<div class="tab-subheader">True Voice</div>'+
                  '<div class="tab-result-summary">31.0%</div>',
        route:   'main.share'
      },
      {
        heading: '<div class="tab-header">Audience</div>'+
                  '<div class="tab-subheader">Top gender</div>'+
                  '<div class="tab-result-summary">Male</div>',
        route:   'main.audience'
      },
      {
        heading: '<div class="tab-header">Conversaton Details</div>'+
                  '<div class="tab-subheader">#1 Phrase</div>'+
                  '<div class="tab-result-summary">coffee</div>',
        route:   'main.conversation'
      }
    ];
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('d3dashApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
