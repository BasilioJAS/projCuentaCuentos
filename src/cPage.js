
var cPageLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        var PASI = new PAS();

        var currentPage = PASI.getCurrentPage();
        switch (currentPage){
            case page_01: resPage = res.page_01_json;break;
            case page_02: resPage = res.page_02_json;break;
            case page_03: resPage = res.page_03_json;break;
            case page_04: resPage = res.page_04_json;break;
            case page_05: resPage = res.page_05_json;break;
            case page_06: resPage = res.page_06_json;break;
            case page_07: resPage = res.page_07_json;break;
            case page_08: resPage = res.page_08_json;break;
            case page_09: resPage = res.page_09_json;break;
            case page_10: resPage = res.page_10_json;break;
            case page_11: resPage = res.page_11_json;break;
            case page_12: resPage = res.page_12_json;break;
            case page_13: resPage = res.page_13_json;break;
            case page_14: resPage = res.page_14_json;break;
            case page_15: resPage = res.page_15_json;break;
            case page_16: resPage = res.page_16_json;break;
            case page_17: resPage = res.page_17_json;break;
            case page_18: resPage = res.page_18_json;break;
            case page_19: resPage = res.page_19_json;break;
            case page_20: resPage = res.page_20_json;break;
        }

        var scene = ccs.load(resPage);
        this.addChild(scene.node);

		var sceneNode = scene.node;
		var pageUi = sceneNode.getChildByName("pageUi");//levanto el UI
/**/
		//levanto Animaciones
		var spriteSheet = null;
        var runningAction = null;
        var sprite = null;

        //1.load spritesheet
         cc.spriteFrameCache.addSpriteFrames(res.runner_plist);

        //2.create spriteframe array
        var animFrames = [];
        for (var i = 0; i < 8; i++) {

            var str = "capa_" + zfill(i,4) + ".png";
            cc.log(str);
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        //3.create a animation with the spriteframe array along with a period time
        var animation = new cc.Animation(animFrames, 0.1);

        //4.wrap the animate action with a repeat forever action
        this.runningAction = new cc.RepeatForever(new cc.Animate(animation));
        this.sprite = new cc.Sprite("#capa_0001.png");
        this.sprite.attr({x:80, y:85});
        this.sprite.runAction(this.runningAction);
        this.spriteSheet.addChild(this.sprite);

/**/

		//levanto los objetos del UI
		var pageNext = pageUi.getChildByName("pageNext");
		var pageLast = pageUi.getChildByName("pageLast");



         var listenerNextPage = cc.EventListener.create({
             event: cc.EventListener.TOUCH_ONE_BY_ONE,
             swallowTouches: true,
             onTouchBegan: function (touch, event) {
                return processEventTouchBegan(touch, event);
             },
             onTouchMoved: function (touch, event) {},
             onTouchEnded: function (touch, event) {
             //aca el codigo del boton cuando lo suelta
                 //var target = event.getCurrentTarget();
                PASI.setCurrentPage(++currentPage);
                cc.director.pushScene(
                    new cc.TransitionFade( 2.0, new cPageScene(), cc.color.WHITE));

             }
         });
         var listenerLastPage = cc.EventListener.create({
             event: cc.EventListener.TOUCH_ONE_BY_ONE,
             swallowTouches: true,
             onTouchBegan: function (touch, event) {
                return processEventTouchBegan(touch, event);
             },
             onTouchMoved: function (touch, event) {},
             onTouchEnded: function (touch, event) {
             //aca el codigo del boton cuando lo suelta
                 //var target = event.getCurrentTarget();
                PASI.setCurrentPage(--currentPage);
                cc.director.pushScene(
                    new cc.TransitionFade( 2.0, new cPageScene(), cc.color.WHITE));

             }
         });

         cc.eventManager.addListener(listenerNextPage, pageNext);
         cc.eventManager.addListener(listenerLastPage, pageLast);


        return true;
    }
});

var cPageScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new cPageLayer();
        this.addChild(layer);
    }
});
