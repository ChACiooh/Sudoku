
function getRandomInt() {
  min = Math.ceil(0);
  max = Math.floor(9);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function go(level)
{
    var a, mat = [];
    for (let i = 0; i < 9; i++)
    {
        a = [];
        for (let j = 0; j < 9; j++)
        {
            a[j] = getRandomInt();
        }
        mat[i] = a;
    }
    make_matrix(mat, 9, 9);
}

function make_matrix(barray, R, C)
{
    var tag = '<table border="1">';
    for (let i = 0; i < R; i++) {
        tag+='<tr>';
        for (let j = 0; j < C; j++)  {
            var id = 'b' + i + ',' + j;
            tag += '<td class="sudokumat" id='+'"'+id + '"' + '>';
            if (barray[i][j] == 0)
            {
                tag += '<form><input type="number" min="1" max="9" value="0" id="'+id+'_"/></form>';
            }else
            {
                tag += barray[i][j];
            }
           tag+='</td>';
        }
        tag+='</tr>'
    }
    tag+='</table>';
    
    document.getElementById("board").innerHTML = tag;
    document.getElementById("boardsubmit").style.visibility = "visible";
    document.getElementById("Hint").style.visibility = "visible";
}

function submit()
{
    var mat = [];
    for (let i = 0; i < 9; i++){
        var a = [];
        for (let j = 0; j < 9; j++){
            a[j] = Value(i, j);
        }
        mat[i] = a;
    }
    var output = "";
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++){
            output += mat[i][j];
        }
        output += '\n';
    }
    alert(output);
}

function Value(r, c)
{
    var id = 'b' + r + ',' + c;
    var y = document.getElementById(id);
    var x = document.getElementById(id).innerHTML;
    if (x.length > 1) x = document.getElementById(id + '_').value;
    
    if (y.style.backgroundColor == "coral") y.style.backgroundColor = "white";
    else y.style.backgroundColor = "coral";

    return x;
}

function Print(r, c)
{
    alert(Value(r, c));
}