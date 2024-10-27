== Dependecy Security
5 things w eneed to take care so that we dont get security issues..

= Resgular Audit of d=ependencies : wahtever you have should be be up to date:  npm audit, npm update,

= Enfocing auditing:  npm set audit true- this is going to ensure that you are update npm will take care of everything.
--  working on exising applications : there is depndent bot in github it will help you to find the outdated and security issue depdenciies. 
-- you want to take control and do custom audit. on main branch: if someone trying to push do some work action. checkout > npm ci> npm audit

= Code & Dependecy monitoring:  we can monitor using codeql a github repo

= Dependecy locking: you have pipiline, github aciton you have set it, but you want to avoide security erros, package-lock.json, you need to lock those dependecies. do change the depdney on those cases not blindly.

= Security Penetration Testing: still there can be secrity eror happens, there are maby scanning tool present, Burp suite, Zed attack protection. these tool helps you to scan and idenfity the security issues. 


