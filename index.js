
YAML = require('yamljs');
 
var j = YAML.parse('juan    1');
// console.log(JSON.stringify(j));
// Generate YAML 
//yamlString = YAML.stringify(nativeObject, 4);
 
// Load yaml file using YAML.load 
var yaml = YAML.load('./input.yml');
//console.log(JSON.stringify(yaml));

var html = '';   
for (attr in yaml.person){
    //console.log(attr + ':' + typeof yaml.person[attr])
    
    var attrType = typeof yaml.person[attr]
    if (attrType === 'number'){
        html+=p(yaml.person[attr])    
    } else if (Array.isArray(yaml.person[attr])){
        html+=ul(yaml.person[attr])
    } else if ( attrType === 'string'){
        html+=p(yaml.person[attr])
    } else if ( attrType === 'object'){
  //      console.log(' object not supported ')
    }
    // console.log(p(yaml.person[attr]));
}

//console.log(wrapper('<div>',html));

function p(value){
    return wrapper('<p>',value)
}

function ul(array){
    var elems='';
    array.forEach(function(e){
        elems+=li(e)
    })
    return wrapper('<ul>',elems)
}

function li(value){
    return wrapper('<li>',value)
}

function wrapper(tag,value){
    return tag.concat(value).concat(tag.replace('<','</'));
}

console.log(wrapper('<html>',wrapper('<body>',wrapper('<div>',html))));


//console.log(li('juan'));
//console.log(wrapper('<a>','juan'));