gdjs.homeCode = {};
gdjs.homeCode.GDtransitionObjects1= [];
gdjs.homeCode.GDtransitionObjects2= [];
gdjs.homeCode.GDplayer_95spriteObjects1= [];
gdjs.homeCode.GDplayer_95spriteObjects2= [];
gdjs.homeCode.GDbomb1Objects1= [];
gdjs.homeCode.GDbomb1Objects2= [];
gdjs.homeCode.GDbomb2Objects1= [];
gdjs.homeCode.GDbomb2Objects2= [];
gdjs.homeCode.GDbomb3Objects1= [];
gdjs.homeCode.GDbomb3Objects2= [];
gdjs.homeCode.GDenemy1Objects1= [];
gdjs.homeCode.GDenemy1Objects2= [];
gdjs.homeCode.GDenemy2Objects1= [];
gdjs.homeCode.GDenemy2Objects2= [];
gdjs.homeCode.GDenemy3Objects1= [];
gdjs.homeCode.GDenemy3Objects2= [];
gdjs.homeCode.GDhud_95oxygenObjects1= [];
gdjs.homeCode.GDhud_95oxygenObjects2= [];
gdjs.homeCode.GDhud_95healthObjects1= [];
gdjs.homeCode.GDhud_95healthObjects2= [];
gdjs.homeCode.GDhud_95htextObjects1= [];
gdjs.homeCode.GDhud_95htextObjects2= [];
gdjs.homeCode.GDhud_95otextObjects1= [];
gdjs.homeCode.GDhud_95otextObjects2= [];
gdjs.homeCode.GDhud_95otext2Objects1= [];
gdjs.homeCode.GDhud_95otext2Objects2= [];
gdjs.homeCode.GDhud_95paperObjects1= [];
gdjs.homeCode.GDhud_95paperObjects2= [];
gdjs.homeCode.GDhud_95plasticObjects1= [];
gdjs.homeCode.GDhud_95plasticObjects2= [];
gdjs.homeCode.GDhud_95glassObjects1= [];
gdjs.homeCode.GDhud_95glassObjects2= [];
gdjs.homeCode.GDhud_95metalObjects1= [];
gdjs.homeCode.GDhud_95metalObjects2= [];
gdjs.homeCode.GDhud_95resetgameObjects1= [];
gdjs.homeCode.GDhud_95resetgameObjects2= [];
gdjs.homeCode.GDhud_95whitelineObjects1= [];
gdjs.homeCode.GDhud_95whitelineObjects2= [];
gdjs.homeCode.GDdrop_95glassObjects1= [];
gdjs.homeCode.GDdrop_95glassObjects2= [];
gdjs.homeCode.GDdrop_95plasticObjects1= [];
gdjs.homeCode.GDdrop_95plasticObjects2= [];
gdjs.homeCode.GDdrop_95paperObjects1= [];
gdjs.homeCode.GDdrop_95paperObjects2= [];
gdjs.homeCode.GDdrop_95metalObjects1= [];
gdjs.homeCode.GDdrop_95metalObjects2= [];
gdjs.homeCode.GDhud_95oxygentankObjects1= [];
gdjs.homeCode.GDhud_95oxygentankObjects2= [];
gdjs.homeCode.GDglass1Objects1= [];
gdjs.homeCode.GDglass1Objects2= [];
gdjs.homeCode.GDglass2Objects1= [];
gdjs.homeCode.GDglass2Objects2= [];
gdjs.homeCode.GDglass3Objects1= [];
gdjs.homeCode.GDglass3Objects2= [];
gdjs.homeCode.GDplastic1Objects1= [];
gdjs.homeCode.GDplastic1Objects2= [];
gdjs.homeCode.GDplastic2Objects1= [];
gdjs.homeCode.GDplastic2Objects2= [];
gdjs.homeCode.GDplastic3Objects1= [];
gdjs.homeCode.GDplastic3Objects2= [];
gdjs.homeCode.GDpaper1Objects1= [];
gdjs.homeCode.GDpaper1Objects2= [];
gdjs.homeCode.GDpaper2Objects1= [];
gdjs.homeCode.GDpaper2Objects2= [];
gdjs.homeCode.GDpaper3Objects1= [];
gdjs.homeCode.GDpaper3Objects2= [];
gdjs.homeCode.GDmetal1Objects1= [];
gdjs.homeCode.GDmetal1Objects2= [];
gdjs.homeCode.GDmetal2Objects1= [];
gdjs.homeCode.GDmetal2Objects2= [];
gdjs.homeCode.GDmetal3Objects1= [];
gdjs.homeCode.GDmetal3Objects2= [];
gdjs.homeCode.GDbackgroundObjects1= [];
gdjs.homeCode.GDbackgroundObjects2= [];
gdjs.homeCode.GDforegroundObjects1= [];
gdjs.homeCode.GDforegroundObjects2= [];
gdjs.homeCode.GDgradientObjects1= [];
gdjs.homeCode.GDgradientObjects2= [];
gdjs.homeCode.GDtransitionObjects1= [];
gdjs.homeCode.GDtransitionObjects2= [];


gdjs.homeCode.asyncCallback16176828 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}
gdjs.homeCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.homeCode.asyncCallback16176828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.homeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.homeCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("foreground"), gdjs.homeCode.GDforegroundObjects1);
{for(var i = 0, len = gdjs.homeCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDbackgroundObjects1[i].setXOffset(gdjs.homeCode.GDbackgroundObjects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.homeCode.GDforegroundObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDforegroundObjects1[i].setXOffset(gdjs.homeCode.GDforegroundObjects1[i].getXOffset() + (0.5));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16175836);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.homeCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.homeCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enter.wav", false, 100, 1);
}
{ //Subevents
gdjs.homeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.homeCode.GDtransitionObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "music\\DifferentWorldBelow.ogg", 100, true, 100, 1);
}{for(var i = 0, len = gdjs.homeCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("hud_otext"), gdjs.homeCode.GDhud_95otextObjects1);
{for(var i = 0, len = gdjs.homeCode.GDhud_95otextObjects1.length ;i < len;++i) {
    gdjs.homeCode.GDhud_95otextObjects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.homeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.homeCode.GDtransitionObjects1.length = 0;
gdjs.homeCode.GDtransitionObjects2.length = 0;
gdjs.homeCode.GDplayer_95spriteObjects1.length = 0;
gdjs.homeCode.GDplayer_95spriteObjects2.length = 0;
gdjs.homeCode.GDbomb1Objects1.length = 0;
gdjs.homeCode.GDbomb1Objects2.length = 0;
gdjs.homeCode.GDbomb2Objects1.length = 0;
gdjs.homeCode.GDbomb2Objects2.length = 0;
gdjs.homeCode.GDbomb3Objects1.length = 0;
gdjs.homeCode.GDbomb3Objects2.length = 0;
gdjs.homeCode.GDenemy1Objects1.length = 0;
gdjs.homeCode.GDenemy1Objects2.length = 0;
gdjs.homeCode.GDenemy2Objects1.length = 0;
gdjs.homeCode.GDenemy2Objects2.length = 0;
gdjs.homeCode.GDenemy3Objects1.length = 0;
gdjs.homeCode.GDenemy3Objects2.length = 0;
gdjs.homeCode.GDhud_95oxygenObjects1.length = 0;
gdjs.homeCode.GDhud_95oxygenObjects2.length = 0;
gdjs.homeCode.GDhud_95healthObjects1.length = 0;
gdjs.homeCode.GDhud_95healthObjects2.length = 0;
gdjs.homeCode.GDhud_95htextObjects1.length = 0;
gdjs.homeCode.GDhud_95htextObjects2.length = 0;
gdjs.homeCode.GDhud_95otextObjects1.length = 0;
gdjs.homeCode.GDhud_95otextObjects2.length = 0;
gdjs.homeCode.GDhud_95otext2Objects1.length = 0;
gdjs.homeCode.GDhud_95otext2Objects2.length = 0;
gdjs.homeCode.GDhud_95paperObjects1.length = 0;
gdjs.homeCode.GDhud_95paperObjects2.length = 0;
gdjs.homeCode.GDhud_95plasticObjects1.length = 0;
gdjs.homeCode.GDhud_95plasticObjects2.length = 0;
gdjs.homeCode.GDhud_95glassObjects1.length = 0;
gdjs.homeCode.GDhud_95glassObjects2.length = 0;
gdjs.homeCode.GDhud_95metalObjects1.length = 0;
gdjs.homeCode.GDhud_95metalObjects2.length = 0;
gdjs.homeCode.GDhud_95resetgameObjects1.length = 0;
gdjs.homeCode.GDhud_95resetgameObjects2.length = 0;
gdjs.homeCode.GDhud_95whitelineObjects1.length = 0;
gdjs.homeCode.GDhud_95whitelineObjects2.length = 0;
gdjs.homeCode.GDdrop_95glassObjects1.length = 0;
gdjs.homeCode.GDdrop_95glassObjects2.length = 0;
gdjs.homeCode.GDdrop_95plasticObjects1.length = 0;
gdjs.homeCode.GDdrop_95plasticObjects2.length = 0;
gdjs.homeCode.GDdrop_95paperObjects1.length = 0;
gdjs.homeCode.GDdrop_95paperObjects2.length = 0;
gdjs.homeCode.GDdrop_95metalObjects1.length = 0;
gdjs.homeCode.GDdrop_95metalObjects2.length = 0;
gdjs.homeCode.GDhud_95oxygentankObjects1.length = 0;
gdjs.homeCode.GDhud_95oxygentankObjects2.length = 0;
gdjs.homeCode.GDglass1Objects1.length = 0;
gdjs.homeCode.GDglass1Objects2.length = 0;
gdjs.homeCode.GDglass2Objects1.length = 0;
gdjs.homeCode.GDglass2Objects2.length = 0;
gdjs.homeCode.GDglass3Objects1.length = 0;
gdjs.homeCode.GDglass3Objects2.length = 0;
gdjs.homeCode.GDplastic1Objects1.length = 0;
gdjs.homeCode.GDplastic1Objects2.length = 0;
gdjs.homeCode.GDplastic2Objects1.length = 0;
gdjs.homeCode.GDplastic2Objects2.length = 0;
gdjs.homeCode.GDplastic3Objects1.length = 0;
gdjs.homeCode.GDplastic3Objects2.length = 0;
gdjs.homeCode.GDpaper1Objects1.length = 0;
gdjs.homeCode.GDpaper1Objects2.length = 0;
gdjs.homeCode.GDpaper2Objects1.length = 0;
gdjs.homeCode.GDpaper2Objects2.length = 0;
gdjs.homeCode.GDpaper3Objects1.length = 0;
gdjs.homeCode.GDpaper3Objects2.length = 0;
gdjs.homeCode.GDmetal1Objects1.length = 0;
gdjs.homeCode.GDmetal1Objects2.length = 0;
gdjs.homeCode.GDmetal2Objects1.length = 0;
gdjs.homeCode.GDmetal2Objects2.length = 0;
gdjs.homeCode.GDmetal3Objects1.length = 0;
gdjs.homeCode.GDmetal3Objects2.length = 0;
gdjs.homeCode.GDbackgroundObjects1.length = 0;
gdjs.homeCode.GDbackgroundObjects2.length = 0;
gdjs.homeCode.GDforegroundObjects1.length = 0;
gdjs.homeCode.GDforegroundObjects2.length = 0;
gdjs.homeCode.GDgradientObjects1.length = 0;
gdjs.homeCode.GDgradientObjects2.length = 0;
gdjs.homeCode.GDtransitionObjects1.length = 0;
gdjs.homeCode.GDtransitionObjects2.length = 0;

gdjs.homeCode.eventsList1(runtimeScene);

return;

}

gdjs['homeCode'] = gdjs.homeCode;
