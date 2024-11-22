== HLD

Key aspects
    - Requirement Analysis
    - Ssytem Architecture
    - Module/Component
    - Data Design/Inteface/API Schema
    - Technology/ Tech choices

Non Functional / Functonal
    - Architect/Tech Lead


Key Take Aways
    - Straignt forward probelm (Junior) & Oprn-ended problem statement(Senior)
    - Topic doesn't decide the intent, Dont assume things. Ask clarifying questions.
    - Drive the interview with interviewers intent
    - System design is not about creating boxes.
    - HLD Ssytem Design is not about coding.



Photo Sharing App (Instagram)
-----------------------------
Try to understand the probel statement
    - Functional Requirement
        - Feed Maangement
            - List
            - Create Post
                - Edit/Upload
                - Filters
        - Reels
            - List
            - Create Reels
        - Stores
            - List
            - Create Stores
        - Browse(Explore)
        - Messages
        - Account Manaagment
        - Profile Management
        - Comment Like
    - Non-Functional Requiremnet.
        - Security (Public private)
        - Device Support (Mobile, Desktop)
        - Auth (Google, facebook)
        - SEO ()
        - Optimization
        - Accessbility
        - Offline Support
        - Testing
        - i18n / 10n
        - Deployment



Architecture Design

Client
    - Storage
        - Redux
        - Apollo Cache
        - LocalStorage
        - IndexDB
    -  View
        - Lisitng
        - Creation
    - Controller (Reusalble things)
        - Filters
        - Editing
        - Upload
        - Post Using
        - Post Creation
    - Services (Services can concact to anywhere) (Logics)
        - Upload Post Creation
        - Post List

Server
    - API Gaeway
        - Auth
        - Upload
        - Post Creation
        -  Post lisitng
        - Cache
        - DB


Component Architecture
    - FeedList
        - Feed
        - Reaction
        - Comment
        - User Details
        - PostBody
    - Feed/Post Creation
        - Upload
        - Editing
        - Filter
        - Caption
        - Tagging
        - Location


Data Model
    - Post
        - id
        - caption
        - createdAt
        - userId
        - mediaId[]
        - caption
    - FeedList
        - postId[]
        - totalPosts
    - User
        - id
        - name
        - profilePhotoUrl
    - Media
        - id
        - type(IMAGE/VIDEO)

API
1. FeedList
Request:
- /feedList?pageNo=1&pageSize=20

Response:
{
    data: {
        feeds:[],
        totalPosts:Number
        currentPageNumber: Number
        currentPageSize:Number
    },
    error:{}
}


2. Create Post
    - Single API
        - /CreatePost
    - Seperate API
        - /upload
        - /createPost


Optimization
    -  Asset Optimization
        - Image Format(WebP)
        - secset
        - userAgent
        - dpr(device pixel ratio)
        - device/internet connectvity
        - PreFetch innages
    - Feed Optimization
        - SSR (ATF -  above the fold)
        - Lazy Loaded
        - Infinite Scroll(Intersection Observable)
        - Virtualization
        - Code Spliting JS
        - Loading Shimmers
        - Preserveing Feed Scroll position
        - Web workers
        - Optimisitic update(loading update)

Implemenetation
    - Image Editing
        - Crop/ Resizing(Canvas API)
        - Filters(CSS Filters)
    - Upload File
        - HTTP Post(Multipart/form-data)
        - Base64 encoding
        - Multi Selection
        - File Chunkcing/Resumable upload 