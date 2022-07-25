# Grow Together

## The App

Grow Together is a web app designed for plant lovers of all levels. The goal is to help owners select plants compatible with their existing collection to make integration seamless and as unstressful as possible.
By curating and matching one's plants to others like it based on watering needs, light requirements, and necessary maintenance levels, the user can ensure that future plants fit into their lifestyle and the aesthetic they like most.

## Technologies

The app was built with a Django REST API, and a ReactJS frontend. It connects to a PostgreSQL database.

- Python/Django
- Javascript/React
- MUI
- PostgreSQL

## Code

<ins>General</ins>

Users can upload a saved image or take a picture of plants using their phones. The app will send the image to PlantNet, a third-party API that uses deep learning technology to identify plants. After receiving the API's response, the app queries the database for that specific plant. The app returns plant matches based on similar conditions. The user can swipe between the matches and select one based on their needs. After the user selects a plant, the app will save the match and redirect the user to their dashboard.

<ins>Authentication</ins> <br>

- Django API and React authentication using JWT access and refresh tokens
- Persistent user login using secure http-only cookies
- Front and backend protected routes using Axios interceptors


## Images

#### Sign Up & Log In
<img src="Documentation/images/LOGIN.png" width="200px">
<img src="Documentation/images/Signup.png" width="200px">

#### Home
<img src="Documentation/images/Home.png" width="200px">

#### Plant ID
<img src="Documentation/images/bestmatch.png" width="200px">

#### Plant Matches
<img src="Documentation/images/match.png" width="200px">

#### My Plants and Drawer Menu
<img src="Documentation/images/myplants.png" width="200px">
<img src="Documentation/images/drawer.png" width="200px">

### Team

<ins>Devs</ins> <br>
- Alexandre Lord 
- Ishan Khosla
- Nayab Kara

<ins>UX/UI Designers</ins> <br>
- Bianca Liu
- Tyannika Lam

