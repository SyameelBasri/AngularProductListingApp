# AngularProductListingApp

App Demo: https://drive.google.com/file/d/1nEN7UtCoLURyp-k1uvFmRkaiO-ArSqd3/view?usp=sharing

The website consists of user registration, log in, profile module and product module. For the register and log in, a simple Node.js + Express.js is used as a back-end server for the user authentication together with the JSON Web Token. Whenever a user is logged in, the server will create a token using the user's login information and send it to the client. The client then stores this token as a proof that the user has been authorized. Additionally, the user’s information is stored in a MongoDB database.

The profile module and the product module are children of the root app.module. Both of these modules required the user to be authorized in order to access them. Profile module consists of a component for displaying profile info and a child component for the user to change password. Product module consists of a component for displaying a list of products in a table form and a child component for displaying a product’s details. Users can navigate through the website using a side navigation bar and can navigate back to the parent component using a breadcrumb navigation.
