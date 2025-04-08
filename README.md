// Youtube clone
// routing
// create- home page with icons ,sidebar and video container
// watch page for videos
// TODO - Implement watch page with comments and suggestions
// Search bar - debouncing
// Search - cache, api call (checks if the data is present no need to call api )

Debouncing :

Flipkart vs Youtube ---
 typing slow = 200ms
 typing fast = 30ms

 Performance:
 iphone 14 pro max = 14 letters *1000 = 14000
 with debouncing -- 3*1000 = 3000

 Debouncing with 200ms- 
 if difference between 2 api calls is < 200ms - Don't make API Call(Decline API call)
 >200ms - make a api call
