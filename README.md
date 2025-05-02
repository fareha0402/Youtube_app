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

// Live Chat >> Infinite Scroll >> Pagination
-- Challenges 
## Data Layer problem
1.Get data live
DATA- ways to handle Live data
-- Web Sockets - handshake between server and UI (2 way connection Bidirection flow , no interval, initial connection takes some time)

-- Long Polling/API Polling- (1 directional and after an interval)- from server to UI.(Poll data after every 10s)


Example: GMAIL should use API Polling(because we don't need it very real time. We can check after 10s if there are new emails?)(Establish connection for web sockets is heavy. so we use API Polling and after sometime we get data)

Trading apps/Whatsapp- Should use Web socktes(We need real time data. Time critical- We need)
## UI layer problem
2.Update the UI on page (page should not freeze)