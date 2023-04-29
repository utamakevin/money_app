# Money App
Money App aims to create a digital dashboard for personal and small business finance.

## Features
- Frontend
    - Navigation bar at the top of the page which provides navigational links to different pages. The pages includes dashboard, categories and profile.
    - Dashboard: 
        This is the main page of the app and contains 'at-a-glance' informations that comes from various data points inside the app. This page includes:
        - A welcome message showing the user signed in
        - Aggregate Cash flow chart (income, outcome and savings - the diffence between income and outcome) on daily, monthly or yearly basis
        - Current cash on hand
        - Top three spending categories
        - Add input button - entry amount, description and category.

    - Categories: 
        Here, the user can see on which category their money is being spent. There is the total amount of money spent on each category. This page includes:
        - Search bar for category search - filter out which spending to view

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
    - The doughnut chart breaks down the current month's expenses into categories.

