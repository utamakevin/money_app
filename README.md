# Money App
Money App aims to create a digital dashboard for personal and small business finance. The app can be accessed [here](https://money-app-g7tp.onrender.com/).

## Tech Stack
-   React
-   Postgres
-   Express

## Library
-   Material UI
-   ChartJS-2

## Features
- Frontend
    - Navigation bar at the top of the page which provides navigational links to different pages. The pages includes dashboard, categories and profile.
    - Dashboard: 
        This is the main page of the app and contains 'at-a-glance' informations that comes from various data points inside the app. This page includes:
        - A welcome message showing the user signed in
        - Aggregate Cash flow chart (income, outcome and savings).
        - Current cash on hand
        - Income and spending categories
        - Add input button - entry amount, description and category.
        Note: The charts are smart enough to include months that have no entry in the equation, provided that there is at least one month with entries before and after it.

    - Categories: 
        Here, the user can see different categories their money is spent on.

    - Profile: 
        This is the settings page for users to edit their profile and access. This page includes:
        - Add/edit/remove profile picture
        - Edit/remove name
        - Edit password 

## Technical Stuffs

### Dashboard
On the dashboard, there are various charts that provides visual representations of the data fetched from the database. There are three charts available: bar, line and doughnut. They are made with react-chartjs-2 library.
-   Line chart: 
    - The line chart displays both revenue and expenses from each month that has entry data.
-   Bar chart:
    - The bar chart displays savings, which value is obtained by subtracting expenses from revenue in each month.
-   Doughnut chart: 
    - The doughnut charts breaks down the aggregate revenue and expenses into categories.

### Categories
Each category is made with MUI accordion. Upon click, it will expand to show various amount spent on the category. 

