gdjs.clickCode = {};
gdjs.clickCode.GDtransitionObjects1= [];
gdjs.clickCode.GDtransitionObjects2= [];
gdjs.clickCode.GDplayer_95spriteObjects1= [];
gdjs.clickCode.GDplayer_95spriteObjects2= [];
gdjs.clickCode.GDbomb1Objects1= [];
gdjs.clickCode.GDbomb1Objects2= [];
gdjs.clickCode.GDbomb2Objects1= [];
gdjs.clickCode.GDbomb2Objects2= [];
gdjs.clickCode.GDbomb3Objects1= [];
gdjs.clickCode.GDbomb3Objects2= [];
gdjs.clickCode.GDenemy1Objects1= [];
gdjs.clickCode.GDenemy1Objects2= [];
gdjs.clickCode.GDenemy2Objects1= [];
gdjs.clickCode.GDenemy2Objects2= [];
gdjs.clickCode.GDenemy3Objects1= [];
gdjs.clickCode.GDenemy3Objects2= [];
gdjs.clickCode.GDhud_95oxygenObjects1= [];
gdjs.clickCode.GDhud_95oxygenObjects2= [];
gdjs.clickCode.GDhud_95healthObjects1= [];
gdjs.clickCode.GDhud_95healthObjects2= [];
gdjs.clickCode.GDhud_95htextObjects1= [];
gdjs.clickCode.GDhud_95htextObjects2= [];
gdjs.clickCode.GDhud_95otextObjects1= [];
gdjs.clickCode.GDhud_95otextObjects2= [];
gdjs.clickCode.GDhud_95otext2Objects1= [];
gdjs.clickCode.GDhud_95otext2Objects2= [];
gdjs.clickCode.GDhud_95paperObjects1= [];
gdjs.clickCode.GDhud_95paperObjects2= [];
gdjs.clickCode.GDhud_95plasticObjects1= [];
gdjs.clickCode.GDhud_95plasticObjects2= [];
gdjs.clickCode.GDhud_95glassObjects1= [];
gdjs.clickCode.GDhud_95glassObjects2= [];
gdjs.clickCode.GDhud_95metalObjects1= [];
gdjs.clickCode.GDhud_95metalObjects2= [];
gdjs.clickCode.GDhud_95resetgameObjects1= [];
gdjs.clickCode.GDhud_95resetgameObjects2= [];
gdjs.clickCode.GDhud_95whitelineObjects1= [];
gdjs.clickCode.GDhud_95whitelineObjects2= [];
gdjs.clickCode.GDdrop_95glassObjects1= [];
gdjs.clickCode.GDdrop_95glassObjects2= [];
gdjs.clickCode.GDdrop_95plasticObjects1= [];
gdjs.clickCode.GDdrop_95plasticObjects2= [];
gdjs.clickCode.GDdrop_95paperObjects1= [];
gdjs.clickCode.GDdrop_95paperObjects2= [];
gdjs.clickCode.GDdrop_95metalObjects1= [];
gdjs.clickCode.GDdrop_95metalObjects2= [];
gdjs.clickCode.GDhud_95oxygentankObjects1= [];
gdjs.clickCode.GDhud_95oxygentankObjects2= [];
gdjs.clickCode.GDglass1Objects1= [];
gdjs.clickCode.GDglass1Objects2= [];
gdjs.clickCode.GDglass2Objects1= [];
gdjs.clickCode.GDglass2Objects2= [];
gdjs.clickCode.GDglass3Objects1= [];
gdjs.clickCode.GDglass3Objects2= [];
gdjs.clickCode.GDplastic1Objects1= [];
gdjs.clickCode.GDplastic1Objects2= [];
gdjs.clickCode.GDplastic2Objects1= [];
gdjs.clickCode.GDplastic2Objects2= [];
gdjs.clickCode.GDplastic3Objects1= [];
gdjs.clickCode.GDplastic3Objects2= [];
gdjs.clickCode.GDpaper1Objects1= [];
gdjs.clickCode.GDpaper1Objects2= [];
gdjs.clickCode.GDpaper2Objects1= [];
gdjs.clickCode.GDpaper2Objects2= [];
gdjs.clickCode.GDpaper3Objects1= [];
gdjs.clickCode.GDpaper3Objects2= [];
gdjs.clickCode.GDmetal1Objects1= [];
gdjs.clickCode.GDmetal1Objects2= [];
gdjs.clickCode.GDmetal2Objects1= [];
gdjs.clickCode.GDmetal2Objects2= [];
gdjs.clickCode.GDmetal3Objects1= [];
gdjs.clickCode.GDmetal3Objects2= [];
gdjs.clickCode.GDbackgroundObjects1= [];
gdjs.clickCode.GDbackgroundObjects2= [];
gdjs.clickCode.GDforegroundObjects1= [];
gdjs.clickCode.GDforegroundObjects2= [];
gdjs.clickCode.GDgradientObjects1= [];
gdjs.clickCode.GDgradientObjects2= [];
gdjs.clickCode.GDtransitionObjects1= [];
gdjs.clickCode.GDtransitionObjects2= [];


gdjs.clickCode.asyncCallback16840588 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}
gdjs.clickCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.clickCode.asyncCallback16840588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.clickCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.clickCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("foreground"), gdjs.clickCode.GDforegroundObjects1);
{for(var i = 0, len = gdjs.clickCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.clickCode.GDbackgroundObjects1[i].setXOffset(gdjs.clickCode.GDbackgroundObjects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.clickCode.GDforegroundObjects1.length ;i < len;++i) {
    gdjs.clickCode.GDforegroundObjects1[i].setXOffset(gdjs.clickCode.GDforegroundObjects1[i].getXOffset() + (0.5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16839564);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.clickCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.clickCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.clickCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enter.wav", false, 100, 1);
}
{ //Subevents
gdjs.clickCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.clickCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.clickCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.clickCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("hud_otext"), gdjs.clickCode.GDhud_95otextObjects1);
{for(var i = 0, len = gdjs.clickCode.GDhud_95otextObjects1.length ;i < len;++i) {
    gdjs.clickCode.GDhud_95otextObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.clickCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.clickCode.GDtransitionObjects1.length = 0;
gdjs.clickCode.GDtransitionObjects2.length = 0;
gdjs.clickCode.GDplayer_95spriteObjects1.length = 0;
gdjs.clickCode.GDplayer_95spriteObjects2.length = 0;
gdjs.clickCode.GDbomb1Objects1.length = 0;
gdjs.clickCode.GDbomb1Objects2.length = 0;
gdjs.clickCode.GDbomb2Objects1.length = 0;
gdjs.clickCode.GDbomb2Objects2.length = 0;
gdjs.clickCode.GDbomb3Objects1.length = 0;
gdjs.clickCode.GDbomb3Objects2.length = 0;
gdjs.clickCode.GDenemy1Objects1.length = 0;
gdjs.clickCode.GDenemy1Objects2.length = 0;
gdjs.clickCode.GDenemy2Objects1.length = 0;
gdjs.clickCode.GDenemy2Objects2.length = 0;
gdjs.clickCode.GDenemy3Objects1.length = 0;
gdjs.clickCode.GDenemy3Objects2.length = 0;
gdjs.clickCode.GDhud_95oxygenObjects1.length = 0;
gdjs.clickCode.GDhud_95oxygenObjects2.length = 0;
gdjs.clickCode.GDhud_95healthObjects1.length = 0;
gdjs.clickCode.GDhud_95healthObjects2.length = 0;
gdjs.clickCode.GDhud_95htextObjects1.length = 0;
gdjs.clickCode.GDhud_95htextObjects2.length = 0;
gdjs.clickCode.GDhud_95otextObjects1.length = 0;
gdjs.clickCode.GDhud_95otextObjects2.length = 0;
gdjs.clickCode.GDhud_95otext2Objects1.length = 0;
gdjs.clickCode.GDhud_95otext2Objects2.length = 0;
gdjs.clickCode.GDhud_95paperObjects1.length = 0;
gdjs.clickCode.GDhud_95paperObjects2.length = 0;
gdjs.clickCode.GDhud_95plasticObjects1.length = 0;
gdjs.clickCode.GDhud_95plasticObjects2.length = 0;
gdjs.clickCode.GDhud_95glassObjects1.length = 0;
gdjs.clickCode.GDhud_95glassObjects2.length = 0;
gdjs.clickCode.GDhud_95metalObjects1.length = 0;
gdjs.clickCode.GDhud_95metalObjects2.length = 0;
gdjs.clickCode.GDhud_95resetgameObjects1.length = 0;
gdjs.clickCode.GDhud_95resetgameObjects2.length = 0;
gdjs.clickCode.GDhud_95whitelineObjects1.length = 0;
gdjs.clickCode.GDhud_95whitelineObjects2.length = 0;
gdjs.clickCode.GDdrop_95glassObjects1.length = 0;
gdjs.clickCode.GDdrop_95glassObjects2.length = 0;
gdjs.clickCode.GDdrop_95plasticObjects1.length = 0;
gdjs.clickCode.GDdrop_95plasticObjects2.length = 0;
gdjs.clickCode.GDdrop_95paperObjects1.length = 0;
gdjs.clickCode.GDdrop_95paperObjects2.length = 0;
gdjs.clickCode.GDdrop_95metalObjects1.length = 0;
gdjs.clickCode.GDdrop_95metalObjects2.length = 0;
gdjs.clickCode.GDhud_95oxygentankObjects1.length = 0;
gdjs.clickCode.GDhud_95oxygentankObjects2.length = 0;
gdjs.clickCode.GDglass1Objects1.length = 0;
gdjs.clickCode.GDglass1Objects2.length = 0;
gdjs.clickCode.GDglass2Objects1.length = 0;
gdjs.clickCode.GDglass2Objects2.length = 0;
gdjs.clickCode.GDglass3Objects1.length = 0;
gdjs.clickCode.GDglass3Objects2.length = 0;
gdjs.clickCode.GDplastic1Objects1.length = 0;
gdjs.clickCode.GDplastic1Objects2.length = 0;
gdjs.clickCode.GDplastic2Objects1.length = 0;
gdjs.clickCode.GDplastic2Objects2.length = 0;
gdjs.clickCode.GDplastic3Objects1.length = 0;
gdjs.clickCode.GDplastic3Objects2.length = 0;
gdjs.clickCode.GDpaper1Objects1.length = 0;
gdjs.clickCode.GDpaper1Objects2.length = 0;
gdjs.clickCode.GDpaper2Objects1.length = 0;
gdjs.clickCode.GDpaper2Objects2.length = 0;
gdjs.clickCode.GDpaper3Objects1.length = 0;
gdjs.clickCode.GDpaper3Objects2.length = 0;
gdjs.clickCode.GDmetal1Objects1.length = 0;
gdjs.clickCode.GDmetal1Objects2.length = 0;
gdjs.clickCode.GDmetal2Objects1.length = 0;
gdjs.clickCode.GDmetal2Objects2.length = 0;
gdjs.clickCode.GDmetal3Objects1.length = 0;
gdjs.clickCode.GDmetal3Objects2.length = 0;
gdjs.clickCode.GDbackgroundObjects1.length = 0;
gdjs.clickCode.GDbackgroundObjects2.length = 0;
gdjs.clickCode.GDforegroundObjects1.length = 0;
gdjs.clickCode.GDforegroundObjects2.length = 0;
gdjs.clickCode.GDgradientObjects1.length = 0;
gdjs.clickCode.GDgradientObjects2.length = 0;
gdjs.clickCode.GDtransitionObjects1.length = 0;
gdjs.clickCode.GDtransitionObjects2.length = 0;

gdjs.clickCode.eventsList1(runtimeScene);

return;

}

gdjs['clickCode'] = gdjs.clickCode;
