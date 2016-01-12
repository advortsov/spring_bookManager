/**
 * Created by Alexander on 12.01.2016.
 */
function _BookUtil(){
    this.deleteBook = function(id) {
        if(confirm("Are you sure?")) {
            window.location = "/deleteBook/"+ id;
        }
    }
}

var BookUtil = new _BookUtil();