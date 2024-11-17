# Database and Caching in Web Applications

Efficient data management is vital for fast, reliable web applications. One way to achieve this is through **caching**—temporarily storing responses to minimize redundant network requests, reduce load, and enhance application performance.

## Caching Techniques

When a **server** sends a response to the **browser**, caching it can improve speed and resource usage by preventing repeated requests. Caching occurs at various layers:

### 1. HTTP Caching
HTTP caching is the first layer, located close to the network. It leverages HTTP headers and protocols to manage cached resources.
   - **Headers Used**:
     - `Cache-Control`: Controls how, and for how long, a response is cached.
     - `Expires`: Sets an expiration date for the cached resource.
     - `Last-Modified`: Caches based on the last modified date of the resource.
     - `ETag`: A hash-based validation mechanism to check if the content has changed.

### 2. Service Worker Caching
The second layer involves service workers, which allow caching resources offline, improving application performance in unstable network conditions.

### 3. API Caching
Libraries like **Apollo Client** and **React Query** offer built-in caching mechanisms to store and reuse API responses efficiently.

### 4. State Management Caching
For data that changes infrequently within the application, state management libraries (e.g., Redux, Zustand) can cache data, reducing network requests and improving performance.

## Types of Web Storage

Web storage provides various methods for storing data on the client side:

### Local Storage
   - **What?** Persistent storage for non-sensitive data on the user’s device.
   - **Methods**: `setItem`, `getItem`, `removeItem`, `clear`.
   - **Size Limit**: 5MB per domain.
   - **Performance**: Synchronous.
   - **Persistence**: Persists across sessions and tab closures.
   - **Structure**: Key-value pairs, where the value is always a string.
   - **Security Concerns**: Vulnerable to XSS (Cross-Site Scripting) attacks; sensitive data should not be stored here.
   - **When to Use?** Storing user preferences or settings.
   - **When Not to Use?** Sensitive information (e.g., authentication tokens) or large datasets.

### Session Storage
   - **What?** Temporary storage that persists only for the session duration.
   - **Methods**: `getItem`, `setItem`, `removeItem`.
   - **Size Limit**: 5MB per domain.
   - **Performance**: Synchronous; may block the main thread.
   - **Persistence**: Cleared when the session ends (browser or tab closed).
   - **Structure**: Key-value pairs.
   - **Security Concerns**: Limited to session scope; XSS vulnerability.
   - **When to Use?** Temporary, non-sensitive data specific to a session.
   - **When Not to Use?** Long-term or large data storage.

### Cookie Storage
   - **What?** Small pieces of data that can be set by both client and server and are transmitted with every HTTP request.
   - **Size Limit**: 4KB per domain.
   - **Performance**: Can increase HTTP request size.
   - **Persistence**: Depends on cookie type (session cookie or persistent cookie).
   - **Structure**: Key-value pairs.
   - **Security**: `httpOnly` flag, secure, `SameSite` attributes to mitigate XSS and CSRF.
   - **When to Use?** Authorization and light data, such as user preferences.
   - **When Not to Use?** Large datasets or highly sensitive data without encryption.

### IndexedDB
   - **What?** Client-side storage for large datasets and complex structures.
   - **Methods**: `indexedDB.open()`, `transaction()`, `objectStore`.
   - **Size Limit**: Generally over 100MB, suitable for offline storage.
   - **Performance**: Asynchronous; does not block the main thread.
   - **Persistence**: Persists across sessions.
   - **Structure**: Key-value pairs supporting complex structures (e.g., blobs).
   - **Security**: Supports encryption; vulnerable to XSS.
   - **When to Use?** Large datasets, offline caching, or data with complex structures.
   - **When Not to Use?** Highly sensitive or small datasets.

## Data Normalization

Data normalization is essential in efficient data management, especially for caching.

   - **What?** Flattening complex structures, storing entities separately, and using unique IDs to establish relationships.
   - **Why?** Reduces redundancy, improves efficiency, simplifies nested relationships, enhances caching performance, and boosts scalability.

## HTTP Caching

**HTTP caching** optimizes resource loading by caching responses based on the HTTP protocol. This reduces server requests, thereby improving the application’s performance.

   - **Resources Cached**: JavaScript, CSS, images, fonts, etc.
   - **Benefits**:
     - Decreases traffic and server load.
     - Improves app performance.
   - **Key Headers**:
     - `Cache-Control`: Defines caching policies for the resource.
     - `Expires`: Specifies an expiration date for cached resources.
     - `Last-Modified` and `ETag`: Help validate cached resources before requesting new versions.

## Interview Questions

1. **What are the main types of client-side storage in a web application?**
   - Discuss local storage, session storage, cookie storage, and IndexedDB.

2. **Explain the differences between local storage and session storage.**
   - Answer should cover persistence, security, and recommended use cases.

3. **What is data normalization, and why is it important for caching?**
   - Normalize data to simplify relationships, reduce redundancy, and enhance performance.

4. **How does HTTP caching improve application performance?**
   - Describe caching headers (`Cache-Control`, `Expires`, etc.) and benefits like reduced load and faster load times.

5. **What are some security concerns with client-side storage, and how can they be mitigated?**
   - XSS vulnerabilities, sensitive data storage, and appropriate mitigation strategies like `httpOnly` cookies.

6. **When would you choose IndexedDB over local storage?**
   - For storing large datasets, offline data, and structured objects with complex relationships.

---

This document provides a structured overview of caching and client-side storage methods along with important questions for interview preparation.



# Service Worker
it fix between in browsewr and network layer, It try to ensure taht it can do proxy.
when you application wanted to get some data from network bcoz it can do the proxy so data actually get passed through it.
Service worker will decide it will make the network request or to catch it.

as it has proxy all the call will go throough the service worker, if cache present then got and get from cache if cache not present go get the request put it in cache and it will benifit in next call.

Works
----
Serivce worker need to be registred.
install the service worker
activate it ordet to start any request(proxy)
activated: ready to use it to do it in proxy.
 
API Caching
-----------
- ReactQuery: Tanstack query (to interact with graphql or rest)
- SWR 
- AXIOS 
- Apollo client


Fetch poloicy/network plocy
- cache-first: id data is ther eache it
- network-only :  if network only and get the data.
- cache-and-network: show the data and do the network call behind the scene.
- cache-last: get the from cache list.
- no-cahce : 

State Management
----------------
tool lib for hepingt this,

- Redux
- Mobx
- Context API(React)
- Vuex(VueJS)
- NgRx(Angular)
- Zustand(React) 


