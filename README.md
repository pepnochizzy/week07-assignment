User Stories
🐿️ As a user, I want the app to be fast and responsive so that I can browse without delays.
🐿️ As a user, I want to read and add posts so that I can interact with the community.
🐿️ As a user, I want a simple and intuitive form for creating new posts so that the process feels effortless.
🐿️ As a user, I want to view multiple pages so that I can easily find the content I’m looking for.
🐿️ As a developer, I want to build a database schema and seed the database with realistic data for accurate testing and development.
🐿️ As a user, I want to be able to view all of the posts within the database so that I can explore all available content.
🐿️ As a developer, I want to use .map() to display all posts to efficiently display fetched data.
🐿️ As a developer, I want to poll my database to render any new data stored in there efficiently.
Requirements
🎯 Create a client using React.
🎯 Use Express to create your server, using both GET and POST endpoints.
🎯 Build a React form for users to create posts.
🎯 Create multiple pages using React Router.
🎯 Design a database schema, and seed the database with some realistic data.
🎯 Use SQL to retrieve posts from the database in your Express server.
🎯 Display all posts using .map().
🎯 Use an interval and useEffect() to poll your database.

## Resources

- I wanted to create a star rating so I used this tutorial with a few additional pieces https://www.youtube.com/watch?v=BmhU_MoxNqQ
- Resources for neumorphic design: https://www.youtube.com/watch?v=_mR_dxyajp0, https://www.justinmind.com/ui-design/neumorphism, https://neumorphism.io/#e0e0e0 (for shadow colours when using the green), https://www.uxdesigninstitute.com/blog/neumorphism-in-ui-design/
- Resources for SQL https://www.w3schools.com/sql/sql_ref_set.asp
- Resources for conditionally rendering filter buttons: https://reactrouter.com/api/hooks/useLocation
- Resources for filtering by star ratings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

## Reflection

- I wanted to go for something very different stylistically, I chose neumorphic because it seemed simple but fun. I really enjoyed making my elements "pop in and out", I especially love the like buttons andI did spend a while just spam clicking them. I felt having a more "specific" style made styling easier because you only really have two choices for each element- should it be raised or depressed? Then I get to decide where the small splashes of colour went. I think that it also made it easier to create a more "website" looking website. I usually struggle with thinking my sites look more like "word documents" and I feel this was a good breakthrough with my website design abilities.
- I also felt I knew when to use useState more intuitevly, it was a much more enjoyable project than last weeks overall as I felt I had more of a handle of React.
- I have a "top rated" books section on my homepage, this has a couple of limitations. Because I am currently not using an API, two people may review the same book but spell the title slightly differently (Lord of The Rings vs Lord Of The Rings) and they would be counted as two seperate books. This means in my query : (CREATE VIEW top_rated_books AS SELECT
  book_title,
  author,
  AVG(stars) AS average_rated
  FROM reviews GROUP BY book_title, author ORDER BY average_rated DESC LIMIT 3) they will get treated as different books and get a different average, this creates a couple of issues but the most important being that the same book could appear twice in top rated. It has another limitation- I do not currently have a COUNT query in the view, this means a book with fewer reviews will have a less robust average.
- To continue discussing the lack of API, I did look into Google Books API. I thought about having a "search bar"-like feature in the create book review dialog, so where you currently type the title of the book it would show book names from the api matching the typed title, you would then select your book title from the dropdown (like in a search bar), this would mean book titles would always match. I decided to avoid this for this specific project as I already had a lot to do in the given time. This is however, something I would add. Does this seem like a good idea?
- Another limitation of this app is the like button feature. I understand that like buttons will never be robust until we understand user authentication. I thought about adding a column in my database called "Likes", once a post is liked it will send a +1 to this column and if the user unlikes it, it would send a -1 to that column for that book. I could then store whether or not a post was liked in local storage so that when the user refreshes (or just comes back to the page), the buttons would remain in the state the user left them. Limitations here are that a user could delete their local storage and therefore increase the likes of a post as much as they want. I am unsure if there is a way around this without authentication.
- What did I complete from requirements? : Create a client using React ✅ Use Express to create server with GET and POST ✅ Build React form for post creations ✅ multiple pages using React Router ✅ design database schema and seed database with realistic data ✅ use SQL to retrieve posts from database ✅ diplay all posts using .map()✅ use interval and useeffect to poll✅
- I did want to ask about the interval/useEffect for polling, I have the interval set to 5 seconds. However, due to how my components are laid out, I was unsure how to create a "refresh" on post submission. I thought it was okay since the most time you would wait after submitting is 5 seconds, this is not outside of the ordinary for refreshing a social media page but I did wonder if there was a better way for this? I tried to add the fetch function to the post submit but because of the way you pass props etc and the layout of my components, I could not get the function into the create post component.
