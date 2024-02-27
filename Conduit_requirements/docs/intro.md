---
sidebar_position: 1
---
# Introduction  

##        Purpose  

This document aims to establish an online platform where registered users can compose articles on various topics to be viewed by registered and non-registered users.   

##        Project Scope   

The project entails building a dynamic website where registered users can create, submit, and showcase articles on diverse topics. Registered and non-registered users can easily browse and view articles, fostering a broad user base. The platform will emphasise user interactivity, featuring comments, likes, and social sharing options to encourage engagement and discussion.

Ensuring a secure and rewarding user experience, the platform will feature robust user profiles, privacy safeguards, and compelling content moderation. The website will be exclusively accessible through web browsers, limiting its availability to desktop and laptop devices rather than mobile phones. The project will prioritise accessibility and compliance with regulations, ultimately creating a versatile and engaging content-sharing platform. 

##      Intended Audience and Reading Suggestion 

The intended audience would include a broad spectrum of individuals interested in diverse topics, ranging from content creators, enthusiasts, and knowledge seekers to casual readers. 
The reading suggestions for a diverse audience encompass a wide array of subjects. Recommendations might include informative articles, creative pieces, and engaging content spanning various interests such as technology, arts, science, lifestyle, and more. This guarantees an enticing experience for every individual across our diverse user base. 

##      Architecture Diagram  

![Architecture Diagram](/img/architectureDiagram.png)



Figure 1. Architecture Diagram illustrating the flow of client requests through a load balancer, reaching the UI layer, then being processed by web and application servers.

In this architecture diagram, users interact with a website to create and publish articles. The process begins with the user (client) accessing the website's interface. Their requests are directed to a load balancer, which evenly distributes traffic across multiple servers to ensure reliability and scalability. The user interface (UI) component handles the presentation layer, providing the interface for users to input and submit articles. 

Behind the scenes, a combination of web servers and application servers processes these requests: the web server serves static content like HTML and CSS, while the application server executes dynamic logic such as article submission and database interactions. Together, these components form a robust system for users to create and publish articles on the website seamlessly.

