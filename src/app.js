
var HelloWorldLayer = cc.Layer.extend({
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

        var mainscene = ccs.load(res.main_menu_json);
        this.addChild(mainscene.node);

		var mainSceneNode = mainscene.node;
		var UImenu = mainSceneNode.getChildByName("ProjectNode_2");//levanto el UI
		//levanto los objetos
		var label_1 = UImenu.getChildByName("label_1");
		var button_1 = UImenu.getChildByName("Button_1");

		//edito una label
		label_1.string = "pepe";

        //creo el listener
         var listener1 = cc.EventListener.create({
             event: cc.EventListener.TOUCH_ONE_BY_ONE,
             swallowTouches: true,
             onTouchBegan: function (touch, event) {
                return processEventTouchBegan(touch, event);
             },
             onTouchMoved: function (touch, event) {},
             onTouchEnded: function (touch, event) {
             //aca el codigo del boton cuando lo suelta
                 var target = event.getCurrentTarget();
                cc.director.pushScene(
                    new cc.TransitionFade( 2.0, new cPageScene(), cc.color.WHITE));

             }
         });


        cc.eventManager.addListener(listener1, button_1);
        cc.eventManager.addListener(listener1.clone(), label_1);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

