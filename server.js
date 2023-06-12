const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000
app.use(bodyParser.json());

     //orders array
let orders =[
  {
    id:"1",
    Date:"12-02-2023",
    Time:"01:38",
    Order_item_id:"1",
    Customer_Id:"1"
  },
  {
    id:"2",
    Date:"12-02-2023",
    Time:"07:38",
    Order_item_id:"1",
    Customer_Id:"1"
  },
  {
    id:"3",
    Date:"12-02-2023",
    Time:"04:38",
    Order_item_id:"1",
    Customer_Id:"1"
  }];

    //customers data array
let users = [
  {
    id:"1",
    Name:"Randika vishwa",
    DOB:"1997/4/05",
    Contact_Number:"075-0484935",
    Email:"www.randika@gmail.com"
  },
  {
    id:"2",
    Name:"Amanda Nava",
    DOB:"1998/4/05",
    Contact_Number:"075-2345234",
    Email:"www.Amanda@gmail.com"
  },
  {
    id:"3",
    Name:"vishwa bandara",
    DOB:"1996/4/05",
    Contact_Number:"077-02445535",
    Email:"www.vishwa@gmail.com"
  },
  { 
    id:"4",
    Name:"Kavindi bandara",
    DOB:"1992/4/05",
    Contact_Number:"078-5566935",
    Email:"www.kavindi@gmail.com"
  },
  { 
    id:"5",
    Name:"lakshan weraa",
    DOB:"1997/3/05",
    Contact_Number:"074-0878735",
    Email:"www.lakshan@gmail.com"
  },];

     //Book data array
let books = [
  {
    id:"1",
    Name:"Gaga Addara",
    Author:"Martin",
    Price:"Rs:1500"
  },
  {
    id:"2",
     Name:"Gaga Addara",
     Author:"Martin",
     Price:"Rs:1500"
  },
    {
      id:"3",
    Name:"Gaga Addara",
    Author:"Martin",
    Price:"Rs:1500"
  },
  {
    id:"4",
    Name:"Gaga Addara",
    Author:"Martin",
    Price:"Rs:1500"
  },];

     //Order item array
let order_item = [
  {
    id:"1",
    bookId:"1",
    quantity:"1",
    price:"Rs:4500"
  },
  {
    id:"2",
    bookId:"2",
    quantity:"2",
    price:"Rs:5500"
  },
  {
    id:"3",
    bookId:"3",
    quantity:"3",
    price:"Rs:3500"
  }];

  //categories
  let categories =[
    {
      id:"1",
      bookid:"1",
      genre:"Fiction"
    },
    {
      id:"2",
      bookid:"2",
      genre:"Historical Fiction"
    },
    {
      id:"3",
      bookid:"3",
      genre:"Nonfiction"
    },
    {
      id:"4",
      bookid:"4",
      genre:"Poetry"
    },
    {
      id:"5",
      bookid:"5",
      genre:"Children's literature"
    },
    {
      id:"6",
      bookid:"6",
      genre:"History"
    },
    {
      id:"7",
      bookid:"7",
      genre:"Romance"
    },
    {
      id:"8",
      bookid:"8",
      genre:"Science fiction"
    }];

    // categories requests
    app.get("/categories",function(req,res){
      res.json(categories)
    });
    app.get("/categories/:id",function(req,res){
      res.json(categories.find((category) => category.id == req.params.id))
    });
    app.post("/categories/",function(req,res){
      categories.push(req.body);
      res.status(200).json(`Enterd sucsses `);
    });
    app.put("/categories/:id",function(req,res){
      const categoryId = req.params.id;
  
      categories = categories.map((category) =>{
        if(category.id == categoryId){
          category = req.body;
        }
        return category;
      });
      res.status(200).json(categories.find((category) => category.id ==req.params.id));
    });
    app.delete("/categories/:id", function(req,res){
      categories = categories.filter(category => category.id != req.params.id)
    });

  //order item requests
  app.get("/orderitem",function(req,res){
    res.json(order_item)
  });
  app.get("/orderitem/:id",function(req,res){
    res.json(order_item.find((item) => item.id == req.params.id))
  });
  app.post("/orderitem",function(req,res){
    order_item.push(req.body);
    res.status(200).json(`Enterd sucsses `);
  });
  app.put("/orderitem/:id",function(req,res){
    const itemId = req.params.id;

    order_item = order_item.map((item) =>{
      if(item.id == itemId){
        item = req.body;
      }
      return item;
    });
    res.status(200).json(order_item.find((item) => item.id ==req.params.id));
  });
  app.delete("/orderitem/:id", function(req,res){
    order_item = order_item.filter(item => item.id != req.params.id)
  });
     //Order data requests
  app.get("/orders",function(req,res){
    res.json(orders)
  });
  app.get("/orders/:id",function(req,res){
    res.json(orders.find((order) => order.id == req.params.id))
  });
  app.post("/orders",function(req,res){
    orders.push(req.body);
    res.status(200).json(`Enterd sucsses `);
  });
  app.put("/orders/:id",function(req,res){
    const orderId = req.params.id;

    orders = orders.map((order) =>{
      if(order.id == orderId){
        order = req.body;
      }
      return order;
    });
    res.status(200).json(orders.find((order) => order.id ==req.params.id));
  });
  app.delete("/orders/:id", function(req,res){
    orders = orders.filter(order => order.id != req.params.id)
  });

     //customer data requests
  app.get("/users",function(req,res){
    res.json(users)
  });
  app.get("/users/:id", function(req,res){
    res.json(users.find((user) => user.id == req.params.id))
  });
  app.post("/users", function (req,res){
    users.push(req.body);
    res.status(200).json ();
  });
  app.put("/users/:id",function(req,res){
    const userId = req.params.id;

    users = users.map((user) =>{
      if (user.id == userId){
        user =req.body;
      }
      return user;
    });
    res.status(200).json(users.find((user) => user.id ==req.params.id));
  });
  app.delete("/users/:id",function(req,res){
    users = users.filter(user => user.id != req.params.id)
  });
  
  // Books Data requests
  app.get("/",function(req,res){
    res.json({
      message:"This is a api"
  })});
  app.get("/books",function(req,res){
    res.json(books);
  });
  app.get("/books/:id", function (req, res) {
    res.json(books.find((book) => book.id == req.params.id))
  });
  app.post("/books", function (req,res){
    books.push(req.body);
    res.status(200).json ({success:true,message:`${req.body.name} created successfully`,
    });
  });
  app.put("/books/:id",function(req,res){
    const bookId = req.params.id;

    books = books.map((book) =>{
      if (book.id == bookId) {
        book = req.body;
        console.log("working")
      }
      return book;
    });
    res.status(200).json(books.find((book) => book.id == req.params.id));

  })
  app.delete("/books/:id", function(req,res){
    books = books.filter(book => book.id != req.params.id)
  })

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});