gdjs.resultCode = {};
gdjs.resultCode.GDtransitionObjects1= [];
gdjs.resultCode.GDtransitionObjects2= [];
gdjs.resultCode.GDplayer_95spriteObjects1= [];
gdjs.resultCode.GDplayer_95spriteObjects2= [];
gdjs.resultCode.GDbomb1Objects1= [];
gdjs.resultCode.GDbomb1Objects2= [];
gdjs.resultCode.GDbomb2Objects1= [];
gdjs.resultCode.GDbomb2Objects2= [];
gdjs.resultCode.GDbomb3Objects1= [];
gdjs.resultCode.GDbomb3Objects2= [];
gdjs.resultCode.GDenemy1Objects1= [];
gdjs.resultCode.GDenemy1Objects2= [];
gdjs.resultCode.GDenemy2Objects1= [];
gdjs.resultCode.GDenemy2Objects2= [];
gdjs.resultCode.GDenemy3Objects1= [];
gdjs.resultCode.GDenemy3Objects2= [];
gdjs.resultCode.GDhud_95oxygenObjects1= [];
gdjs.resultCode.GDhud_95oxygenObjects2= [];
gdjs.resultCode.GDhud_95healthObjects1= [];
gdjs.resultCode.GDhud_95healthObjects2= [];
gdjs.resultCode.GDhud_95htextObjects1= [];
gdjs.resultCode.GDhud_95htextObjects2= [];
gdjs.resultCode.GDhud_95otextObjects1= [];
gdjs.resultCode.GDhud_95otextObjects2= [];
gdjs.resultCode.GDhud_95otext1Objects1= [];
gdjs.resultCode.GDhud_95otext1Objects2= [];
gdjs.resultCode.GDhud_95otext2Objects1= [];
gdjs.resultCode.GDhud_95otext2Objects2= [];
gdjs.resultCode.GDhud_95paperObjects1= [];
gdjs.resultCode.GDhud_95paperObjects2= [];
gdjs.resultCode.GDhud_95plasticObjects1= [];
gdjs.resultCode.GDhud_95plasticObjects2= [];
gdjs.resultCode.GDhud_95glassObjects1= [];
gdjs.resultCode.GDhud_95glassObjects2= [];
gdjs.resultCode.GDhud_95metalObjects1= [];
gdjs.resultCode.GDhud_95metalObjects2= [];
gdjs.resultCode.GDhud_95resetgameObjects1= [];
gdjs.resultCode.GDhud_95resetgameObjects2= [];
gdjs.resultCode.GDhud_95whitelineObjects1= [];
gdjs.resultCode.GDhud_95whitelineObjects2= [];
gdjs.resultCode.GDdrop_95glassObjects1= [];
gdjs.resultCode.GDdrop_95glassObjects2= [];
gdjs.resultCode.GDdrop_95plasticObjects1= [];
gdjs.resultCode.GDdrop_95plasticObjects2= [];
gdjs.resultCode.GDdrop_95paperObjects1= [];
gdjs.resultCode.GDdrop_95paperObjects2= [];
gdjs.resultCode.GDdrop_95metalObjects1= [];
gdjs.resultCode.GDdrop_95metalObjects2= [];
gdjs.resultCode.GDhud_95oxygentankObjects1= [];
gdjs.resultCode.GDhud_95oxygentankObjects2= [];
gdjs.resultCode.GDglass1Objects1= [];
gdjs.resultCode.GDglass1Objects2= [];
gdjs.resultCode.GDglass2Objects1= [];
gdjs.resultCode.GDglass2Objects2= [];
gdjs.resultCode.GDglass3Objects1= [];
gdjs.resultCode.GDglass3Objects2= [];
gdjs.resultCode.GDplastic1Objects1= [];
gdjs.resultCode.GDplastic1Objects2= [];
gdjs.resultCode.GDplastic2Objects1= [];
gdjs.resultCode.GDplastic2Objects2= [];
gdjs.resultCode.GDplastic3Objects1= [];
gdjs.resultCode.GDplastic3Objects2= [];
gdjs.resultCode.GDpaper1Objects1= [];
gdjs.resultCode.GDpaper1Objects2= [];
gdjs.resultCode.GDpaper2Objects1= [];
gdjs.resultCode.GDpaper2Objects2= [];
gdjs.resultCode.GDpaper3Objects1= [];
gdjs.resultCode.GDpaper3Objects2= [];
gdjs.resultCode.GDmetal1Objects1= [];
gdjs.resultCode.GDmetal1Objects2= [];
gdjs.resultCode.GDmetal2Objects1= [];
gdjs.resultCode.GDmetal2Objects2= [];
gdjs.resultCode.GDmetal3Objects1= [];
gdjs.resultCode.GDmetal3Objects2= [];
gdjs.resultCode.GDbackgroundObjects1= [];
gdjs.resultCode.GDbackgroundObjects2= [];
gdjs.resultCode.GDforegroundObjects1= [];
gdjs.resultCode.GDforegroundObjects2= [];
gdjs.resultCode.GDgradientObjects1= [];
gdjs.resultCode.GDgradientObjects2= [];
gdjs.resultCode.GDtransitionObjects1= [];
gdjs.resultCode.GDtransitionObjects2= [];
gdjs.resultCode.GDNewButtonObjects1= [];
gdjs.resultCode.GDNewButtonObjects2= [];


gdjs.resultCode.asyncCallback16289684 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}
gdjs.resultCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.resultCode.asyncCallback16289684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.resultCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.resultCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("foreground"), gdjs.resultCode.GDforegroundObjects1);
{for(var i = 0, len = gdjs.resultCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.resultCode.GDbackgroundObjects1[i].setXOffset(gdjs.resultCode.GDbackgroundObjects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.resultCode.GDforegroundObjects1.length ;i < len;++i) {
    gdjs.resultCode.GDforegroundObjects1[i].setXOffset(gdjs.resultCode.GDforegroundObjects1[i].getXOffset() + (0.5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.resultCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.resultCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.resultCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16289292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.resultCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.resultCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.resultCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enter.wav", false, 100, 1);
}
{ //Subevents
gdjs.resultCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("hud_otext"), gdjs.resultCode.GDhud_95otextObjects1);
{for(var i = 0, len = gdjs.resultCode.GDhud_95otextObjects1.length ;i < len;++i) {
    gdjs.resultCode.GDhud_95otextObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.resultCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.resultCode.GDtransitionObjects1.length = 0;
gdjs.resultCode.GDtransitionObjects2.length = 0;
gdjs.resultCode.GDplayer_95spriteObjects1.length = 0;
gdjs.resultCode.GDplayer_95spriteObjects2.length = 0;
gdjs.resultCode.GDbomb1Objects1.length = 0;
gdjs.resultCode.GDbomb1Objects2.length = 0;
gdjs.resultCode.GDbomb2Objects1.length = 0;
gdjs.resultCode.GDbomb2Objects2.length = 0;
gdjs.resultCode.GDbomb3Objects1.length = 0;
gdjs.resultCode.GDbomb3Objects2.length = 0;
gdjs.resultCode.GDenemy1Objects1.length = 0;
gdjs.resultCode.GDenemy1Objects2.length = 0;
gdjs.resultCode.GDenemy2Objects1.length = 0;
gdjs.resultCode.GDenemy2Objects2.length = 0;
gdjs.resultCode.GDenemy3Objects1.length = 0;
gdjs.resultCode.GDenemy3Objects2.length = 0;
gdjs.resultCode.GDhud_95oxygenObjects1.length = 0;
gdjs.resultCode.GDhud_95oxygenObjects2.length = 0;
gdjs.resultCode.GDhud_95healthObjects1.length = 0;
gdjs.resultCode.GDhud_95healthObjects2.length = 0;
gdjs.resultCode.GDhud_95htextObjects1.length = 0;
gdjs.resultCode.GDhud_95htextObjects2.length = 0;
gdjs.resultCode.GDhud_95otextObjects1.length = 0;
gdjs.resultCode.GDhud_95otextObjects2.length = 0;
gdjs.resultCode.GDhud_95otext1Objects1.length = 0;
gdjs.resultCode.GDhud_95otext1Objects2.length = 0;
gdjs.resultCode.GDhud_95otext2Objects1.length = 0;
gdjs.resultCode.GDhud_95otext2Objects2.length = 0;
gdjs.resultCode.GDhud_95paperObjects1.length = 0;
gdjs.resultCode.GDhud_95paperObjects2.length = 0;
gdjs.resultCode.GDhud_95plasticObjects1.length = 0;
gdjs.resultCode.GDhud_95plasticObjects2.length = 0;
gdjs.resultCode.GDhud_95glassObjects1.length = 0;
gdjs.resultCode.GDhud_95glassObjects2.length = 0;
gdjs.resultCode.GDhud_95metalObjects1.length = 0;
gdjs.resultCode.GDhud_95metalObjects2.length = 0;
gdjs.resultCode.GDhud_95resetgameObjects1.length = 0;
gdjs.resultCode.GDhud_95resetgameObjects2.length = 0;
gdjs.resultCode.GDhud_95whitelineObjects1.length = 0;
gdjs.resultCode.GDhud_95whitelineObjects2.length = 0;
gdjs.resultCode.GDdrop_95glassObjects1.length = 0;
gdjs.resultCode.GDdrop_95glassObjects2.length = 0;
gdjs.resultCode.GDdrop_95plasticObjects1.length = 0;
gdjs.resultCode.GDdrop_95plasticObjects2.length = 0;
gdjs.resultCode.GDdrop_95paperObjects1.length = 0;
gdjs.resultCode.GDdrop_95paperObjects2.length = 0;
gdjs.resultCode.GDdrop_95metalObjects1.length = 0;
gdjs.resultCode.GDdrop_95metalObjects2.length = 0;
gdjs.resultCode.GDhud_95oxygentankObjects1.length = 0;
gdjs.resultCode.GDhud_95oxygentankObjects2.length = 0;
gdjs.resultCode.GDglass1Objects1.length = 0;
gdjs.resultCode.GDglass1Objects2.length = 0;
gdjs.resultCode.GDglass2Objects1.length = 0;
gdjs.resultCode.GDglass2Objects2.length = 0;
gdjs.resultCode.GDglass3Objects1.length = 0;
gdjs.resultCode.GDglass3Objects2.length = 0;
gdjs.resultCode.GDplastic1Objects1.length = 0;
gdjs.resultCode.GDplastic1Objects2.length = 0;
gdjs.resultCode.GDplastic2Objects1.length = 0;
gdjs.resultCode.GDplastic2Objects2.length = 0;
gdjs.resultCode.GDplastic3Objects1.length = 0;
gdjs.resultCode.GDplastic3Objects2.length = 0;
gdjs.resultCode.GDpaper1Objects1.length = 0;
gdjs.resultCode.GDpaper1Objects2.length = 0;
gdjs.resultCode.GDpaper2Objects1.length = 0;
gdjs.resultCode.GDpaper2Objects2.length = 0;
gdjs.resultCode.GDpaper3Objects1.length = 0;
gdjs.resultCode.GDpaper3Objects2.length = 0;
gdjs.resultCode.GDmetal1Objects1.length = 0;
gdjs.resultCode.GDmetal1Objects2.length = 0;
gdjs.resultCode.GDmetal2Objects1.length = 0;
gdjs.resultCode.GDmetal2Objects2.length = 0;
gdjs.resultCode.GDmetal3Objects1.length = 0;
gdjs.resultCode.GDmetal3Objects2.length = 0;
gdjs.resultCode.GDbackgroundObjects1.length = 0;
gdjs.resultCode.GDbackgroundObjects2.length = 0;
gdjs.resultCode.GDforegroundObjects1.length = 0;
gdjs.resultCode.GDforegroundObjects2.length = 0;
gdjs.resultCode.GDgradientObjects1.length = 0;
gdjs.resultCode.GDgradientObjects2.length = 0;
gdjs.resultCode.GDtransitionObjects1.length = 0;
gdjs.resultCode.GDtransitionObjects2.length = 0;
gdjs.resultCode.GDNewButtonObjects1.length = 0;
gdjs.resultCode.GDNewButtonObjects2.length = 0;

gdjs.resultCode.eventsList1(runtimeScene);

return;

}

gdjs['resultCode'] = gdjs.resultCode;
