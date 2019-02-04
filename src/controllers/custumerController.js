const controller = { };



/// Muestra lo Que se ve en la Base de datos

controller.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        if(err){
            console.log('error en la Coneccion');
        }
        conn.query('SELECT * FROM user',(err,usuarios)=>{
            if(err){
                res.json(err);
            }
            res.render('vistaCustumer',{
                data:usuarios
            });

        });
    });
    
    
};







/// Guarda datos dentro la base de datos

controller.save = (req,res)=>{
    const data = req.body;
    
    req.getConnection( (err,conn)=>{
        if(err){
            console.log(err);
        }
        conn.query('INSERT INTO user set ?',[data], (err,users)=>{

          if(err){
            console.log(err);
          }

          res.redirect('/');

          
        });
    });
};





/// Elimina Datos de la base mediante id que se obtiene


controller.delete = (req , res) =>{
    const id = req.params.id;
    
     req.getConnection((err,conn)=>{
         if(err){
            console.log(err);
         }
         conn.query('DELETE FROM user WHERE  id = ?',[id],(err,rows)=>{
            if(err){
                console.log(err);
            }
            res.redirect('/');
         });
     });

};



//// edita los datos mediante su ID los envia a una vista con datos mediante su id

controller.edit = (req, res)=> {
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        if(err){
            console.log(err);
        }
        conn.query('SELECT * FROM user WHERE id = ?',[id], (err,user)=>{
            if(err){
                console.log(err);
            }
            res.render('user_edit',{
                data: user[0]
            });
        });
    });

};

///////se guardan los datos,  mediante el id


controller.update = (req,res)=>{
    const {id} = req.params;
    const data = req.body;
    console.log(id);
    console.log(data);
 
    req.getConnection((err,conn)=>{
        if(err){
            console.log(err);
        }else{
            conn.query('UPDATE user set ? WHERE id = ?', [data, id], (err,user)=>{
                if(err){
                    console.log(err);
                } else{
                    console.log('OK!');
                    res.redirect('/');
                }
               
                
                
            });

        }
        
    });
    

};







module.exports = controller;