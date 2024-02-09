# JS logic Project💻

¡Welcome all to Pixel Tv Project! This is the Week Two Project and second challenge at GeeksHubs Academy, consisting in a interactive tv with diferent channels, volume, and more.

## 🤖 How does it work? 

#### First We need to understand the problem

  We are given an array with three arguments, a, b , c, with values a = 12 , b = 14 , c = 16, from now on Va, Vb, Vc; we only need to account for inputs with n%3 == 0 items. The total value can be devided by 3("3 per 1 offer"). Each of those items can be splited and combined with other items with other values. The statement goes on to decide wich is the best strategy to combine items and reduce the price, however this does no reduce the total price just, neither the price of the combinet item, it just evens out the price of each individual item.
  <br>
  With the information we already have, its easy to reach a conclusion where the total value of the array is the sum of the product of each argument by its value, devided by 3 and ceil(). $((a*Va)+(b*Vb)+(c*Vc))/3$
  <br>
  This works because no matter the arrangement of items the average price will always stay the same: $((a*Va)+(b*Vb)+(c*Vc))/(a+b+c)$ The total value will be that average by the number of items $(a+b+c)*((a*Va)+(b*Vb)+(c*Vc))/(a+b+c)$
  Simplified and dividing it by 3 we get the previous function.
  
## 🛠️ Tech&Tolls used 


<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge" alt="js"/>



## ✒️ Autor

- **Pol Montero** - Project Developer
  - [GitHub](https://github.com/hypoldev) 

## 🎓 Special Thanks

- To **Geekshubs Academy** for the trust and encouragement to develop this first project (3/12 i suppose).

## 📄 Add Ons - Bugs and Dreams

As far as i know there is no what to optimize the code.
