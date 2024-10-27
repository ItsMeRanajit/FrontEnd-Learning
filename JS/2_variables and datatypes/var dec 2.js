{
    //generally declearing vars like this isnot a good practice
    //there are 3 ways of declearing variables - var, let , const
    
    // var 
    var a = 14;
    //  old method of dec. variabels.var variables can be redecleared and updated multiple times. so using var is not good option.
    
    var a=10;
    var b;
    b=14;
    console.log(a);
    console.log(b);
    var c;
    console.log(c); //if a variable is not assigned with any value then it is undefined. same for all dec. ways.
    
    //let
    let l;
    // good method. the values can be updated multiple times but not redec. 
    l=70;
    let d=9;
    console.log(l)
    console.log(d)
    
    //const
    const pi=3.141;
    //const cannot also be redec. but it also cannot be updated. and the value of the var must be assigned in the same step otherwise error.
    console.log(pi)
    }
    
    //{ code... } the segment inside the curly bracs is known as blocks. same var name cannot be used in the same block but can be used in different blocks.
    
    {
        let l="same var name";
        console.log(l)
    }
    