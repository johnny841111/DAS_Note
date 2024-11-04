function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }


    function print_inorder (root){

        let print=[];
        Inorder_Travel(root,print)
        return print

    }

    function Inorder_Travel(root,array){
          if (root===null){
            return
          }

          Inorder_Travel(root.left,array)

          array.push(root.val)

          Inorder_Travel(root.right,array)

          return
    }

    function print_BFT (root){

        let print=[];
        BFT(root,print)
        
        return print

    }
  function BFT(root,array){
     let Q =[]
     Q.push(root)

     while(Q.length>0){
        let now = Q.shift();
        array.push(now.val)
        if (now.left!==null){
            Q.push(now.left)
        }
        if (now.right!==null){
            Q.push(now.right)
        }
     }

     return

  }

  function print_LV_BFT (root){

    let print=[];
    LV_BFT(root,print)
    
    return print

}

  function LV_BFT(root,array){
    let Q =[]
    Q.push(root)


    while(Q.length>0){//每次 while loop就會重讀 Ｑ.現在的長度
        let note_long=Q.length
        let con=[]

       for(i=0; i<note_long;i++){//如果用Q.length下一次for loop時 就會重讀Ｑ現在的長度 就會-1+2被改動，所以要用固定的值在for loop中，所以用note_long
           let now=Q.shift()
           con.push(now.val)

           if (now.left!==null){
            Q.push(now.left)//直接複寫Ｑ
            }

            if (now.right!==null){
                Q.push(now.right)////直接複寫Ｑ
                }

       }

       array.push(con)
    }

    return

 }
