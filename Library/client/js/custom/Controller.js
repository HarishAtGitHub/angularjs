angular.module('bootstrapTabs', ['ui.bootstrap' , 'ngTable']);

TabController = function ($scope) {
                   $scope.homePagetabs = [
                                            { 
                                               title:"Home", 
                                               content:"Dynamic content 1",
                                               page: "html/tabs/homePagetabs/info.html" 
                                            },

                                            { 
                                               title:"Search",    
                                               content:"Dynamic content 2", 
                                               page: "html/tabs/homePagetabs/search.html"
                                            }
                                         ];    
    
                }


TableController = function ($scope, $filter, $q, ngTableParams) {
                     var data = [
                                 {Title: "Advanced Programming In The UNIX Environment",          Language: "English", WhereIsIt : "Available" ,BorrowedDate :"-",Category: "Technical"},
                                 {Title: "Data Structures & Algorithms In Java,2/ed",             Language: "English", WhereIsIt : "Available" ,BorrowedDate :"-",Category: "Technical"},
                                 {Title: "Introduction to Algorithms",                            Language: "English", WhereIsIt : "Available" ,BorrowedDate :"-",Category:"Technical"},
                                 {Title: "Thirukural",                                            Language: "Tamil",   WhereIsIt : "Available" ,BorrowedDate :"-",Category:"Literature"},
                                 {Title: "Head First Programming",                                Language: "English", WhereIsIt : "Arun"      ,BorrowedDate :"6-Jun-2011",Category:"Technical"},
                                 {Title: "Code Craft: The Practice Of Writing Excellent Code",    Language: "English", WhereIsIt : "Shiva"     ,BorrowedDate :"2-Feb-2013",Category:"Technical"},
                                 {Title: "Postgres 9.0 High Performance",                         Language: "English", WhereIsIt : "Available" ,BorrowedDate : "-",Category:"Technical"},
                                 {Title: "Java Puzzlers : Traps, Pitfalls, And Corner Cases",     Language: "English", WhereIsIt : "Vivek"     ,BorrowedDate : "10-Oct-2013",Category:"Technical"},
                                 {Title: "Building Secure Software",                              Language: "English", WhereIsIt : "Available" ,BorrowedDate : "-",Category:"Technical"},
                                 {Title: "Lucene in Action Copy1",                                Language: "English", WhereIsIt : "Shiva"    ,BorrowedDate : "3-Jul-2011",Category:"Technical"},
                                 {Title: "Hibernate in Action",                                   Language: "English", WhereIsIt : "Shiva"     ,BorrowedDate : "4-Nov-2013",Category:"Technical"},
                                 {Title: "Verification Testing with Silk Test",                   Language: "English", WhereIsIt : "Available" ,BorrowedDate : "-",Category:"Technical"},
                                 {Title: "Ponniyin selvan",                                       Language: "Tamil",   WhereIsIt : "Sri Ram"   ,BorrowedDate :"6-Jun-2011",Category:"Literature"},
                                 {Title: "Time Saving Solution for Struts, Ant, Junit ",          Language: "English", WhereIsIt : "Raja"     ,BorrowedDate :"1-Jan-2011",Category:"Technical"},
                                 {Title: "Sivagamiyin Sabatham",                                  Language: "Tamil",   WhereIsIt : "Available" ,BorrowedDate : "-",Category:"Literature"},
                                 {Title: "Parthiban Kanavu",                                      Language: "Tamil",   WhereIsIt : "Jeorge"    ,BorrowedDate :"6-Jun-2011",Category:"Literature"},
                                 {Title: "Cryptography Engineering",                              Language: "English", WhereIsIt : "Raja"      ,BorrowedDate :"2-May-2013",Category:"Technical"}
                               ];
                     $scope.tableParams = new ngTableParams({
                                                              page: 1,            // show first page
                                                              count: 4,           // Number of items seen per page
                                                              filter: {
                                                                        Title: '',       // you can specify something here to have initial filter
                                                                        Language: '',
                                                                        WhereIsIt: '',
                                                                        Category: ''
                                                                      },
                                                              sorting:{
                                                                        Title: ''
                                                                      }
                                                             }, 
                                                             {
                                                              total: data.length, // length of data
                                                              getData: function($defer, params) {
                                                                          console.log(data[0].Title);
                                                                          filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
                                                                          orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;
                                                                          params.total(orderedData.length); // set total for recalc pagination
                                                                          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                                                              
                                                              }
                                               });

                     var inArray = Array.prototype.indexOf ?
                                                             function (val, arr) {
                                                                 return arr.indexOf(val)
                                                             } 
                                                           :
                                                             function (val, arr) {
                                                                var i = arr.length;
                                                                while (i--) {
                                                                   if (arr[i] === val) return i;
                                                                }
                                                                return -1;
                                                             }
                    $scope.names = function(column) {
                                      var def = $q.defer(),
                                      arr = [],
                                      names = [];
                                      angular.forEach(data, function(item){
                                                               if (inArray(item.WhereIsIt, arr) === -1) {
                                                               arr.push(item.WhereIsIt);
                                                               names.push({
                                                                      'id': item.WhereIsIt,
                                                                      'title': item.WhereIsIt
                                                                       });
                                                                }
                                                            });
                                      def.resolve(names);
                                      return def;
                                   };
                    $scope.categories = function(column) {
                                      var def = $q.defer(),
                                      arr = [],
                                      names = [];
                                      angular.forEach(data, function(item){
                                                               if (inArray(item.Category, arr) === -1) {
                                                               arr.push(item.Category);
                                                               names.push({
                                                                      'id': item.Category,
                                                                      'title': item.Category
                                                                       });
                                                                }
                                                            });
                                      def.resolve(names);
                                      return def;
                                   };

                   }

 

