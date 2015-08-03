const page_01 = 0;
const page_02 = 1;
const page_03 = 2;
const page_04 = 3;
const page_05 = 4;
const page_06 = 5;
const page_07 = 6;
const page_08 = 7;
const page_09 = 8;
const page_10 = 9;
const page_11 = 10;
const page_12 = 11;
const page_13 = 12;
const page_14 = 13;
const page_15 = 14;
const page_16 = 15;
const page_17 = 16;
const page_18 = 17;
const page_19 = 18;
const page_20 = 19;

function processEventTouchBegan(touch, event)
{
     var target = event.getCurrentTarget();
     var locationInNode = target.convertToNodeSpace(touch.getLocation());
     var s = target.getContentSize();
     var rect = cc.rect(0, 0, s.width, s.height);
     if (cc.rectContainsPoint(rect, locationInNode)) return true;
     return false;
}

/*
//TODO: el page lo tiene que levantar de la memoria en el constructor de la futura clase util.
var page = 0;

function setCurrentPage(page)
{
     this.page = page ;
}
function getCurrentPage()
{
     return this.page;
}
*/
//PAGE ADMIN SINGLETON

function zfill(num, len) {return (Array(len).join("0") + num).slice(-len);}


function PAS()
{
    // demo variable
    var pages;

    // instance of the singleton
    this.singletonInstance = null;

    // Get the instance of the SingletonClass
    // If there is no instance in this.singletonInstance, instanciate one
    var getInstance = function() {
        if (!this.singletonInstance) {
            // create a instance
            this.singletonInstance = createInstance();
            page =0;
            //TODO: leer de la memoria el ultimo valor de page

        }

        // return the instance of the singletonClass
        return this.singletonInstance;
    }

    // function for the creation of the SingletonClass class
    var createInstance = function() {

        // public methodes
        return {
            setCurrentPage : function(_page) {
                page = _page;
            },
            getCurrentPage : function() {
                return page;
            }
        }
    }

    // wen constructed the getInstance is automaticly called and return the SingletonClass instance
    return getInstance();
}



