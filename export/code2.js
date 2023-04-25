gdjs.mainCode = {};
gdjs.mainCode.GDtransitionObjects1= [];
gdjs.mainCode.GDtransitionObjects2= [];
gdjs.mainCode.GDplayer_95spriteObjects1= [];
gdjs.mainCode.GDplayer_95spriteObjects2= [];
gdjs.mainCode.GDbomb1Objects1= [];
gdjs.mainCode.GDbomb1Objects2= [];
gdjs.mainCode.GDbomb2Objects1= [];
gdjs.mainCode.GDbomb2Objects2= [];
gdjs.mainCode.GDbomb3Objects1= [];
gdjs.mainCode.GDbomb3Objects2= [];
gdjs.mainCode.GDenemy1Objects1= [];
gdjs.mainCode.GDenemy1Objects2= [];
gdjs.mainCode.GDenemy2Objects1= [];
gdjs.mainCode.GDenemy2Objects2= [];
gdjs.mainCode.GDenemy3Objects1= [];
gdjs.mainCode.GDenemy3Objects2= [];
gdjs.mainCode.GDhud_95oxygenObjects1= [];
gdjs.mainCode.GDhud_95oxygenObjects2= [];
gdjs.mainCode.GDhud_95healthObjects1= [];
gdjs.mainCode.GDhud_95healthObjects2= [];
gdjs.mainCode.GDhud_95htextObjects1= [];
gdjs.mainCode.GDhud_95htextObjects2= [];
gdjs.mainCode.GDhud_95otextObjects1= [];
gdjs.mainCode.GDhud_95otextObjects2= [];
gdjs.mainCode.GDhud_95paperObjects1= [];
gdjs.mainCode.GDhud_95paperObjects2= [];
gdjs.mainCode.GDhud_95plasticObjects1= [];
gdjs.mainCode.GDhud_95plasticObjects2= [];
gdjs.mainCode.GDhud_95glassObjects1= [];
gdjs.mainCode.GDhud_95glassObjects2= [];
gdjs.mainCode.GDhud_95metalObjects1= [];
gdjs.mainCode.GDhud_95metalObjects2= [];
gdjs.mainCode.GDhud_95resetgameObjects1= [];
gdjs.mainCode.GDhud_95resetgameObjects2= [];
gdjs.mainCode.GDhud_95whitelineObjects1= [];
gdjs.mainCode.GDhud_95whitelineObjects2= [];
gdjs.mainCode.GDdrop_95glassObjects1= [];
gdjs.mainCode.GDdrop_95glassObjects2= [];
gdjs.mainCode.GDdrop_95plasticObjects1= [];
gdjs.mainCode.GDdrop_95plasticObjects2= [];
gdjs.mainCode.GDdrop_95paperObjects1= [];
gdjs.mainCode.GDdrop_95paperObjects2= [];
gdjs.mainCode.GDdrop_95metalObjects1= [];
gdjs.mainCode.GDdrop_95metalObjects2= [];
gdjs.mainCode.GDweed1Objects1= [];
gdjs.mainCode.GDweed1Objects2= [];
gdjs.mainCode.GDweed2Objects1= [];
gdjs.mainCode.GDweed2Objects2= [];
gdjs.mainCode.GDweed3Objects1= [];
gdjs.mainCode.GDweed3Objects2= [];
gdjs.mainCode.GDvoid_95colorObjects1= [];
gdjs.mainCode.GDvoid_95colorObjects2= [];
gdjs.mainCode.GDglass1Objects1= [];
gdjs.mainCode.GDglass1Objects2= [];
gdjs.mainCode.GDglass2Objects1= [];
gdjs.mainCode.GDglass2Objects2= [];
gdjs.mainCode.GDglass3Objects1= [];
gdjs.mainCode.GDglass3Objects2= [];
gdjs.mainCode.GDplastic1Objects1= [];
gdjs.mainCode.GDplastic1Objects2= [];
gdjs.mainCode.GDplastic2Objects1= [];
gdjs.mainCode.GDplastic2Objects2= [];
gdjs.mainCode.GDplastic3Objects1= [];
gdjs.mainCode.GDplastic3Objects2= [];
gdjs.mainCode.GDpaper1Objects1= [];
gdjs.mainCode.GDpaper1Objects2= [];
gdjs.mainCode.GDpaper2Objects1= [];
gdjs.mainCode.GDpaper2Objects2= [];
gdjs.mainCode.GDpaper3Objects1= [];
gdjs.mainCode.GDpaper3Objects2= [];
gdjs.mainCode.GDmetal1Objects1= [];
gdjs.mainCode.GDmetal1Objects2= [];
gdjs.mainCode.GDmetal2Objects1= [];
gdjs.mainCode.GDmetal2Objects2= [];
gdjs.mainCode.GDmetal3Objects1= [];
gdjs.mainCode.GDmetal3Objects2= [];
gdjs.mainCode.GDbackgroundObjects1= [];
gdjs.mainCode.GDbackgroundObjects2= [];
gdjs.mainCode.GDforegroundObjects1= [];
gdjs.mainCode.GDforegroundObjects2= [];
gdjs.mainCode.GDgradientObjects1= [];
gdjs.mainCode.GDgradientObjects2= [];
gdjs.mainCode.GDfloor_95chainObjects1= [];
gdjs.mainCode.GDfloor_95chainObjects2= [];


gdjs.mainCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)) <= 5 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enemy.wav", false, 100, 1);
}}

}


};gdjs.mainCode.asyncCallback15797604 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}
gdjs.mainCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.mainCode.asyncCallback15797604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.asyncCallback15782244 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home", false);
}}
gdjs.mainCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.mainCode.asyncCallback15782244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.asyncCallback15783436 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}
gdjs.mainCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.mainCode.asyncCallback15783436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb1Objects1Objects = Hashtable.newFrom({"bomb1": gdjs.mainCode.GDbomb1Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb2Objects1Objects = Hashtable.newFrom({"bomb2": gdjs.mainCode.GDbomb2Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb3Objects1Objects = Hashtable.newFrom({"bomb3": gdjs.mainCode.GDbomb3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy1Objects1Objects = Hashtable.newFrom({"enemy1": gdjs.mainCode.GDenemy1Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.mainCode.GDenemy2Objects1});
gdjs.mainCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)) >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enemy.wav", false, 100, 1);
}}

}


};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.mainCode.GDenemy2Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy3Objects1Objects = Hashtable.newFrom({"enemy3": gdjs.mainCode.GDenemy3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy3Objects1Objects = Hashtable.newFrom({"enemy3": gdjs.mainCode.GDenemy3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdrop_9595glassObjects1Objects = Hashtable.newFrom({"drop_glass": gdjs.mainCode.GDdrop_95glassObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass1Objects1ObjectsGDgdjs_46mainCode_46GDglass2Objects1ObjectsGDgdjs_46mainCode_46GDglass3Objects1Objects = Hashtable.newFrom({"glass1": gdjs.mainCode.GDglass1Objects1, "glass2": gdjs.mainCode.GDglass2Objects1, "glass3": gdjs.mainCode.GDglass3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdrop_9595plasticObjects1Objects = Hashtable.newFrom({"drop_plastic": gdjs.mainCode.GDdrop_95plasticObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic1Objects1ObjectsGDgdjs_46mainCode_46GDplastic2Objects1ObjectsGDgdjs_46mainCode_46GDplastic3Objects1Objects = Hashtable.newFrom({"plastic1": gdjs.mainCode.GDplastic1Objects1, "plastic2": gdjs.mainCode.GDplastic2Objects1, "plastic3": gdjs.mainCode.GDplastic3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdrop_9595paperObjects1Objects = Hashtable.newFrom({"drop_paper": gdjs.mainCode.GDdrop_95paperObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper1Objects1ObjectsGDgdjs_46mainCode_46GDpaper2Objects1ObjectsGDgdjs_46mainCode_46GDpaper3Objects1Objects = Hashtable.newFrom({"paper1": gdjs.mainCode.GDpaper1Objects1, "paper2": gdjs.mainCode.GDpaper2Objects1, "paper3": gdjs.mainCode.GDpaper3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdrop_9595metalObjects1Objects = Hashtable.newFrom({"drop_metal": gdjs.mainCode.GDdrop_95metalObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal1Objects1ObjectsGDgdjs_46mainCode_46GDmetal2Objects1ObjectsGDgdjs_46mainCode_46GDmetal3Objects1Objects = Hashtable.newFrom({"metal1": gdjs.mainCode.GDmetal1Objects1, "metal2": gdjs.mainCode.GDmetal2Objects1, "metal3": gdjs.mainCode.GDmetal3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass1Objects1ObjectsGDgdjs_46mainCode_46GDglass2Objects1ObjectsGDgdjs_46mainCode_46GDglass3Objects1Objects = Hashtable.newFrom({"glass1": gdjs.mainCode.GDglass1Objects1, "glass2": gdjs.mainCode.GDglass2Objects1, "glass3": gdjs.mainCode.GDglass3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic1Objects1ObjectsGDgdjs_46mainCode_46GDplastic2Objects1ObjectsGDgdjs_46mainCode_46GDplastic3Objects1Objects = Hashtable.newFrom({"plastic1": gdjs.mainCode.GDplastic1Objects1, "plastic2": gdjs.mainCode.GDplastic2Objects1, "plastic3": gdjs.mainCode.GDplastic3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper1Objects1ObjectsGDgdjs_46mainCode_46GDpaper2Objects1ObjectsGDgdjs_46mainCode_46GDpaper3Objects1Objects = Hashtable.newFrom({"paper1": gdjs.mainCode.GDpaper1Objects1, "paper2": gdjs.mainCode.GDpaper2Objects1, "paper3": gdjs.mainCode.GDpaper3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects = Hashtable.newFrom({"player_sprite": gdjs.mainCode.GDplayer_95spriteObjects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal1Objects1ObjectsGDgdjs_46mainCode_46GDmetal2Objects1ObjectsGDgdjs_46mainCode_46GDmetal3Objects1Objects = Hashtable.newFrom({"metal1": gdjs.mainCode.GDmetal1Objects1, "metal2": gdjs.mainCode.GDmetal2Objects1, "metal3": gdjs.mainCode.GDmetal3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass1Objects2ObjectsGDgdjs_46mainCode_46GDglass2Objects2ObjectsGDgdjs_46mainCode_46GDglass3Objects2Objects = Hashtable.newFrom({"glass1": gdjs.mainCode.GDglass1Objects2, "glass2": gdjs.mainCode.GDglass2Objects2, "glass3": gdjs.mainCode.GDglass3Objects2});
gdjs.mainCode.eventsList5 = function(runtimeScene) {

};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic1Objects2ObjectsGDgdjs_46mainCode_46GDplastic2Objects2ObjectsGDgdjs_46mainCode_46GDplastic3Objects2Objects = Hashtable.newFrom({"plastic1": gdjs.mainCode.GDplastic1Objects2, "plastic2": gdjs.mainCode.GDplastic2Objects2, "plastic3": gdjs.mainCode.GDplastic3Objects2});
gdjs.mainCode.eventsList6 = function(runtimeScene) {

};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper1Objects2ObjectsGDgdjs_46mainCode_46GDpaper2Objects2ObjectsGDgdjs_46mainCode_46GDpaper3Objects2Objects = Hashtable.newFrom({"paper1": gdjs.mainCode.GDpaper1Objects2, "paper2": gdjs.mainCode.GDpaper2Objects2, "paper3": gdjs.mainCode.GDpaper3Objects2});
gdjs.mainCode.eventsList7 = function(runtimeScene) {

};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal1Objects2ObjectsGDgdjs_46mainCode_46GDmetal2Objects2ObjectsGDgdjs_46mainCode_46GDmetal3Objects2Objects = Hashtable.newFrom({"metal1": gdjs.mainCode.GDmetal1Objects2, "metal2": gdjs.mainCode.GDmetal2Objects2, "metal3": gdjs.mainCode.GDmetal3Objects2});
gdjs.mainCode.eventsList8 = function(runtimeScene) {

};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb1Objects2ObjectsGDgdjs_46mainCode_46GDbomb2Objects2ObjectsGDgdjs_46mainCode_46GDbomb3Objects2Objects = Hashtable.newFrom({"bomb1": gdjs.mainCode.GDbomb1Objects2, "bomb2": gdjs.mainCode.GDbomb2Objects2, "bomb3": gdjs.mainCode.GDbomb3Objects2});
gdjs.mainCode.eventsList9 = function(runtimeScene) {

};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy1Objects2ObjectsGDgdjs_46mainCode_46GDenemy2Objects2ObjectsGDgdjs_46mainCode_46GDenemy3Objects2Objects = Hashtable.newFrom({"enemy1": gdjs.mainCode.GDenemy1Objects2, "enemy2": gdjs.mainCode.GDenemy2Objects2, "enemy3": gdjs.mainCode.GDenemy3Objects2});
gdjs.mainCode.eventsList10 = function(runtimeScene) {

};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass1Objects1Objects = Hashtable.newFrom({"glass1": gdjs.mainCode.GDglass1Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass2Objects1Objects = Hashtable.newFrom({"glass2": gdjs.mainCode.GDglass2Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass3Objects1Objects = Hashtable.newFrom({"glass3": gdjs.mainCode.GDglass3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic1Objects1Objects = Hashtable.newFrom({"plastic1": gdjs.mainCode.GDplastic1Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic2Objects1Objects = Hashtable.newFrom({"plastic2": gdjs.mainCode.GDplastic2Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic3Objects1Objects = Hashtable.newFrom({"plastic3": gdjs.mainCode.GDplastic3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper1Objects1Objects = Hashtable.newFrom({"paper1": gdjs.mainCode.GDpaper1Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper2Objects1Objects = Hashtable.newFrom({"paper2": gdjs.mainCode.GDpaper2Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper3Objects1Objects = Hashtable.newFrom({"paper3": gdjs.mainCode.GDpaper3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal1Objects1Objects = Hashtable.newFrom({"metal1": gdjs.mainCode.GDmetal1Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal2Objects1Objects = Hashtable.newFrom({"metal2": gdjs.mainCode.GDmetal2Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal3Objects1Objects = Hashtable.newFrom({"metal3": gdjs.mainCode.GDmetal3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb1Objects1Objects = Hashtable.newFrom({"bomb1": gdjs.mainCode.GDbomb1Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb2Objects1Objects = Hashtable.newFrom({"bomb2": gdjs.mainCode.GDbomb2Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb3Objects1Objects = Hashtable.newFrom({"bomb3": gdjs.mainCode.GDbomb3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy1Objects1Objects = Hashtable.newFrom({"enemy1": gdjs.mainCode.GDenemy1Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.mainCode.GDenemy2Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy3Objects1Objects = Hashtable.newFrom({"enemy3": gdjs.mainCode.GDenemy3Objects1});
gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDvoid_9595colorObjects1Objects = Hashtable.newFrom({"void_color": gdjs.mainCode.GDvoid_95colorObjects1});
gdjs.mainCode.asyncCallback9564404 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "result", false);
}}
gdjs.mainCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.mainCode.asyncCallback9564404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.eventsList12 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].setColor("255;255;255");
}
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "health", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).sub(1);
}
}
{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "oxygen", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "health2", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)) >= 10 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).add(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)) > 10 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).setNumber(10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)) > 10 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).setNumber(10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).setNumber(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.mainCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.mainCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.mainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("hud_glass"), gdjs.mainCode.GDhud_95glassObjects1);
gdjs.copyArray(runtimeScene.getObjects("hud_health"), gdjs.mainCode.GDhud_95healthObjects1);
gdjs.copyArray(runtimeScene.getObjects("hud_metal"), gdjs.mainCode.GDhud_95metalObjects1);
gdjs.copyArray(runtimeScene.getObjects("hud_oxygen"), gdjs.mainCode.GDhud_95oxygenObjects1);
gdjs.copyArray(runtimeScene.getObjects("hud_paper"), gdjs.mainCode.GDhud_95paperObjects1);
gdjs.copyArray(runtimeScene.getObjects("hud_plastic"), gdjs.mainCode.GDhud_95plasticObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDhud_95oxygenObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDhud_95oxygenObjects1[i].SetValue((gdjs.RuntimeObject.getVariableNumber(((gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDplayer_95spriteObjects1[0].getVariables()).getFromIndex(1))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.mainCode.GDhud_95healthObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDhud_95healthObjects1[i].SetValue((gdjs.RuntimeObject.getVariableNumber(((gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDplayer_95spriteObjects1[0].getVariables()).getFromIndex(2))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.mainCode.GDhud_95glassObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDhud_95glassObjects1[i].setBBText("Glass" + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDplayer_95spriteObjects1[0].getVariables()).getFromIndex(3)))));
}
}{for(var i = 0, len = gdjs.mainCode.GDhud_95plasticObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDhud_95plasticObjects1[i].setBBText("Plastic" + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDplayer_95spriteObjects1[0].getVariables()).getFromIndex(4)))));
}
}{for(var i = 0, len = gdjs.mainCode.GDhud_95paperObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDhud_95paperObjects1[i].setBBText("Paper" + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDplayer_95spriteObjects1[0].getVariables()).getFromIndex(6)))));
}
}{for(var i = 0, len = gdjs.mainCode.GDhud_95metalObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDhud_95metalObjects1[i].setBBText("Metal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.mainCode.GDplayer_95spriteObjects1[0].getVariables()).getFromIndex(5)))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15781852);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.mainCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.mainCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.mainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F1");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15783036);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.mainCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.mainCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.mainCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].setAnimationName("swim");
}
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("bomb1"), gdjs.mainCode.GDbomb1Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15754644);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDbomb1Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enemy.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDbomb1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb1Objects1[i].setAnimationName("explode");
}
}{for(var i = 0, len = gdjs.mainCode.GDbomb1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb1Objects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).sub(1);
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).sub(0.5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bomb2"), gdjs.mainCode.GDbomb2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15756900);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDbomb2Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 1, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enemy.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDbomb2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb2Objects1[i].setAnimationName("explode");
}
}{for(var i = 0, len = gdjs.mainCode.GDbomb2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb2Objects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).sub(2);
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).sub(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bomb3"), gdjs.mainCode.GDbomb3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15759340);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDbomb3Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 1.5, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enemy.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDbomb3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb3Objects1[i].setAnimationName("explode");
}
}{for(var i = 0, len = gdjs.mainCode.GDbomb3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb3Objects1[i].playAnimation();
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).sub(3);
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).sub(2);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("bomb1"), gdjs.mainCode.GDbomb1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDbomb1Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDbomb1Objects1[i].isCurrentAnimationName("explode") ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDbomb1Objects1[k] = gdjs.mainCode.GDbomb1Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDbomb1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDbomb1Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDbomb1Objects1[i].hasAnimationEnded2() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDbomb1Objects1[k] = gdjs.mainCode.GDbomb1Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDbomb1Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDbomb1Objects1 */
{for(var i = 0, len = gdjs.mainCode.GDbomb1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bomb2"), gdjs.mainCode.GDbomb2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDbomb2Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDbomb2Objects1[i].isCurrentAnimationName("explode") ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDbomb2Objects1[k] = gdjs.mainCode.GDbomb2Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDbomb2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDbomb2Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDbomb2Objects1[i].hasAnimationEnded2() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDbomb2Objects1[k] = gdjs.mainCode.GDbomb2Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDbomb2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDbomb2Objects1 */
{for(var i = 0, len = gdjs.mainCode.GDbomb2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bomb3"), gdjs.mainCode.GDbomb3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDbomb3Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDbomb3Objects1[i].isCurrentAnimationName("explode") ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDbomb3Objects1[k] = gdjs.mainCode.GDbomb3Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDbomb3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDbomb3Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDbomb3Objects1[i].hasAnimationEnded2() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDbomb3Objects1[k] = gdjs.mainCode.GDbomb3Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDbomb3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDbomb3Objects1 */
{for(var i = 0, len = gdjs.mainCode.GDbomb3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemy1"), gdjs.mainCode.GDenemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15770540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enemy.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).sub(1);
}
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.mainCode.GDenemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "piranha", 0.75, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15772108);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).sub(1);
}
}
{ //Subevents
gdjs.mainCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.mainCode.GDenemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy2Objects1Objects, 300, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDenemy2Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy2Objects1[i].addForceTowardObject((gdjs.mainCode.GDplayer_95spriteObjects1.length !== 0 ? gdjs.mainCode.GDplayer_95spriteObjects1[0] : null), 100, 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.mainCode.GDenemy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15775060);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDenemy3Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\enemy.wav", false, 100, 1);
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(2)).sub(1);
}
}{for(var i = 0, len = gdjs.mainCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy3Objects1[i].setAnimationName("explode");
}
}{for(var i = 0, len = gdjs.mainCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy3Objects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.mainCode.GDenemy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy3Objects1Objects, 300, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDenemy3Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy3Objects1[i].addForceTowardObject((gdjs.mainCode.GDplayer_95spriteObjects1.length !== 0 ? gdjs.mainCode.GDplayer_95spriteObjects1[0] : null), 100, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.mainCode.GDenemy3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDenemy3Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDenemy3Objects1[i].isCurrentAnimationName("explode") ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDenemy3Objects1[k] = gdjs.mainCode.GDenemy3Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDenemy3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDenemy3Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDenemy3Objects1[i].hasAnimationEnded2() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDenemy3Objects1[k] = gdjs.mainCode.GDenemy3Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDenemy3Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDenemy3Objects1 */
{for(var i = 0, len = gdjs.mainCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("drop_glass"), gdjs.mainCode.GDdrop_95glassObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(3)) >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdrop_9595glassObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15783956);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
gdjs.mainCode.GDglass1Objects1.length = 0;

gdjs.mainCode.GDglass2Objects1.length = 0;

gdjs.mainCode.GDglass3Objects1.length = 0;

{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(3)).sub(1);
}
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass1Objects1ObjectsGDgdjs_46mainCode_46GDglass2Objects1ObjectsGDgdjs_46mainCode_46GDglass3Objects1Objects, "glass" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), (( gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayer_95spriteObjects1[0].getCenterXInScene()), (( gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayer_95spriteObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\drop.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDglass1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass1Objects1[i].returnVariable(gdjs.mainCode.GDglass1Objects1[i].getVariables().get("collected")).setNumber(1);
}
for(var i = 0, len = gdjs.mainCode.GDglass2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass2Objects1[i].returnVariable(gdjs.mainCode.GDglass2Objects1[i].getVariables().get("collected")).setNumber(1);
}
for(var i = 0, len = gdjs.mainCode.GDglass3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass3Objects1[i].returnVariable(gdjs.mainCode.GDglass3Objects1[i].getVariables().get("collected")).setNumber(1);
}
}{for(var i = 0, len = gdjs.mainCode.GDglass1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass1Objects1[i].getBehavior("Physics2").setDynamic();
}
for(var i = 0, len = gdjs.mainCode.GDglass2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass2Objects1[i].getBehavior("Physics2").setDynamic();
}
for(var i = 0, len = gdjs.mainCode.GDglass3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass3Objects1[i].getBehavior("Physics2").setDynamic();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("drop_plastic"), gdjs.mainCode.GDdrop_95plasticObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(4)) >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdrop_9595plasticObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15787004);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
gdjs.mainCode.GDplastic1Objects1.length = 0;

gdjs.mainCode.GDplastic2Objects1.length = 0;

gdjs.mainCode.GDplastic3Objects1.length = 0;

{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(4)).sub(1);
}
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic1Objects1ObjectsGDgdjs_46mainCode_46GDplastic2Objects1ObjectsGDgdjs_46mainCode_46GDplastic3Objects1Objects, "plastic" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), (( gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayer_95spriteObjects1[0].getCenterXInScene()), (( gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayer_95spriteObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\drop.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDplastic1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic1Objects1[i].returnVariable(gdjs.mainCode.GDplastic1Objects1[i].getVariables().get("collected")).setNumber(1);
}
for(var i = 0, len = gdjs.mainCode.GDplastic2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic2Objects1[i].returnVariable(gdjs.mainCode.GDplastic2Objects1[i].getVariables().get("collected")).setNumber(1);
}
for(var i = 0, len = gdjs.mainCode.GDplastic3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic3Objects1[i].returnVariable(gdjs.mainCode.GDplastic3Objects1[i].getVariables().get("collected")).setNumber(1);
}
}{for(var i = 0, len = gdjs.mainCode.GDplastic1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic1Objects1[i].getBehavior("Physics2").setDynamic();
}
for(var i = 0, len = gdjs.mainCode.GDplastic2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic2Objects1[i].getBehavior("Physics2").setDynamic();
}
for(var i = 0, len = gdjs.mainCode.GDplastic3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic3Objects1[i].getBehavior("Physics2").setDynamic();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("drop_paper"), gdjs.mainCode.GDdrop_95paperObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(6)) >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdrop_9595paperObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15789116);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
gdjs.mainCode.GDpaper1Objects1.length = 0;

gdjs.mainCode.GDpaper2Objects1.length = 0;

gdjs.mainCode.GDpaper3Objects1.length = 0;

{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(6)).sub(1);
}
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper1Objects1ObjectsGDgdjs_46mainCode_46GDpaper2Objects1ObjectsGDgdjs_46mainCode_46GDpaper3Objects1Objects, "paper" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), (( gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayer_95spriteObjects1[0].getCenterXInScene()), (( gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayer_95spriteObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\drop.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDpaper1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper1Objects1[i].returnVariable(gdjs.mainCode.GDpaper1Objects1[i].getVariables().get("collected")).setNumber(1);
}
for(var i = 0, len = gdjs.mainCode.GDpaper2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper2Objects1[i].returnVariable(gdjs.mainCode.GDpaper2Objects1[i].getVariables().get("collected")).setNumber(1);
}
for(var i = 0, len = gdjs.mainCode.GDpaper3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper3Objects1[i].returnVariable(gdjs.mainCode.GDpaper3Objects1[i].getVariables().get("collected")).setNumber(1);
}
}{for(var i = 0, len = gdjs.mainCode.GDpaper1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper1Objects1[i].getBehavior("Physics2").setDynamic();
}
for(var i = 0, len = gdjs.mainCode.GDpaper2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper2Objects1[i].getBehavior("Physics2").setDynamic();
}
for(var i = 0, len = gdjs.mainCode.GDpaper3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper3Objects1[i].getBehavior("Physics2").setDynamic();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("drop_metal"), gdjs.mainCode.GDdrop_95metalObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(5)) >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDdrop_9595metalObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15791332);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
gdjs.mainCode.GDmetal1Objects1.length = 0;

gdjs.mainCode.GDmetal2Objects1.length = 0;

gdjs.mainCode.GDmetal3Objects1.length = 0;

{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(5)).sub(1);
}
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal1Objects1ObjectsGDgdjs_46mainCode_46GDmetal2Objects1ObjectsGDgdjs_46mainCode_46GDmetal3Objects1Objects, "metal" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), (( gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayer_95spriteObjects1[0].getCenterXInScene()), (( gdjs.mainCode.GDplayer_95spriteObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDplayer_95spriteObjects1[0].getCenterYInScene()), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\drop.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDmetal1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal1Objects1[i].returnVariable(gdjs.mainCode.GDmetal1Objects1[i].getVariables().get("collected")).setNumber(1);
}
for(var i = 0, len = gdjs.mainCode.GDmetal2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal2Objects1[i].returnVariable(gdjs.mainCode.GDmetal2Objects1[i].getVariables().get("collected")).setNumber(1);
}
for(var i = 0, len = gdjs.mainCode.GDmetal3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal3Objects1[i].returnVariable(gdjs.mainCode.GDmetal3Objects1[i].getVariables().get("collected")).setNumber(1);
}
}{for(var i = 0, len = gdjs.mainCode.GDmetal1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal1Objects1[i].getBehavior("Physics2").setDynamic();
}
for(var i = 0, len = gdjs.mainCode.GDmetal2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal2Objects1[i].getBehavior("Physics2").setDynamic();
}
for(var i = 0, len = gdjs.mainCode.GDmetal3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal3Objects1[i].getBehavior("Physics2").setDynamic();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("drop_glass"), gdjs.mainCode.GDdrop_95glassObjects1);
gdjs.copyArray(runtimeScene.getObjects("drop_metal"), gdjs.mainCode.GDdrop_95metalObjects1);
gdjs.copyArray(runtimeScene.getObjects("drop_paper"), gdjs.mainCode.GDdrop_95paperObjects1);
gdjs.copyArray(runtimeScene.getObjects("drop_plastic"), gdjs.mainCode.GDdrop_95plasticObjects1);
{for(var i = 0, len = gdjs.mainCode.GDdrop_95glassObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDdrop_95glassObjects1[i].setOpacity(100);
}
for(var i = 0, len = gdjs.mainCode.GDdrop_95plasticObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDdrop_95plasticObjects1[i].setOpacity(100);
}
for(var i = 0, len = gdjs.mainCode.GDdrop_95paperObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDdrop_95paperObjects1[i].setOpacity(100);
}
for(var i = 0, len = gdjs.mainCode.GDdrop_95metalObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDdrop_95metalObjects1[i].setOpacity(100);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("glass1"), gdjs.mainCode.GDglass1Objects1);
gdjs.copyArray(runtimeScene.getObjects("glass2"), gdjs.mainCode.GDglass2Objects1);
gdjs.copyArray(runtimeScene.getObjects("glass3"), gdjs.mainCode.GDglass3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass1Objects1ObjectsGDgdjs_46mainCode_46GDglass2Objects1ObjectsGDgdjs_46mainCode_46GDglass3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDglass1Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDglass1Objects1[i].getVariableNumber(gdjs.mainCode.GDglass1Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDglass1Objects1[k] = gdjs.mainCode.GDglass1Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDglass1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDglass2Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDglass2Objects1[i].getVariableNumber(gdjs.mainCode.GDglass2Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDglass2Objects1[k] = gdjs.mainCode.GDglass2Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDglass2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDglass3Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDglass3Objects1[i].getVariableNumber(gdjs.mainCode.GDglass3Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDglass3Objects1[k] = gdjs.mainCode.GDglass3Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDglass3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15763732);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDglass1Objects1 */
/* Reuse gdjs.mainCode.GDglass2Objects1 */
/* Reuse gdjs.mainCode.GDglass3Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(3)).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\collect.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDglass1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDglass2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDglass3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("plastic1"), gdjs.mainCode.GDplastic1Objects1);
gdjs.copyArray(runtimeScene.getObjects("plastic2"), gdjs.mainCode.GDplastic2Objects1);
gdjs.copyArray(runtimeScene.getObjects("plastic3"), gdjs.mainCode.GDplastic3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic1Objects1ObjectsGDgdjs_46mainCode_46GDplastic2Objects1ObjectsGDgdjs_46mainCode_46GDplastic3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplastic1Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplastic1Objects1[i].getVariableNumber(gdjs.mainCode.GDplastic1Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplastic1Objects1[k] = gdjs.mainCode.GDplastic1Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplastic1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplastic2Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplastic2Objects1[i].getVariableNumber(gdjs.mainCode.GDplastic2Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplastic2Objects1[k] = gdjs.mainCode.GDplastic2Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplastic2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplastic3Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplastic3Objects1[i].getVariableNumber(gdjs.mainCode.GDplastic3Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplastic3Objects1[k] = gdjs.mainCode.GDplastic3Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplastic3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15765908);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDplastic1Objects1 */
/* Reuse gdjs.mainCode.GDplastic2Objects1 */
/* Reuse gdjs.mainCode.GDplastic3Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(4)).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\collect.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDplastic1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDplastic2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDplastic3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("paper1"), gdjs.mainCode.GDpaper1Objects1);
gdjs.copyArray(runtimeScene.getObjects("paper2"), gdjs.mainCode.GDpaper2Objects1);
gdjs.copyArray(runtimeScene.getObjects("paper3"), gdjs.mainCode.GDpaper3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper1Objects1ObjectsGDgdjs_46mainCode_46GDpaper2Objects1ObjectsGDgdjs_46mainCode_46GDpaper3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDpaper1Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDpaper1Objects1[i].getVariableNumber(gdjs.mainCode.GDpaper1Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDpaper1Objects1[k] = gdjs.mainCode.GDpaper1Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDpaper1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDpaper2Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDpaper2Objects1[i].getVariableNumber(gdjs.mainCode.GDpaper2Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDpaper2Objects1[k] = gdjs.mainCode.GDpaper2Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDpaper2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDpaper3Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDpaper3Objects1[i].getVariableNumber(gdjs.mainCode.GDpaper3Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDpaper3Objects1[k] = gdjs.mainCode.GDpaper3Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDpaper3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15767636);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDpaper1Objects1 */
/* Reuse gdjs.mainCode.GDpaper2Objects1 */
/* Reuse gdjs.mainCode.GDpaper3Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(6)).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\collect.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDpaper1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDpaper2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDpaper3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("metal1"), gdjs.mainCode.GDmetal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("metal2"), gdjs.mainCode.GDmetal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("metal3"), gdjs.mainCode.GDmetal3Objects1);
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplayer_9595spriteObjects1Objects, gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal1Objects1ObjectsGDgdjs_46mainCode_46GDmetal2Objects1ObjectsGDgdjs_46mainCode_46GDmetal3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDmetal1Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDmetal1Objects1[i].getVariableNumber(gdjs.mainCode.GDmetal1Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDmetal1Objects1[k] = gdjs.mainCode.GDmetal1Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDmetal1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDmetal2Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDmetal2Objects1[i].getVariableNumber(gdjs.mainCode.GDmetal2Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDmetal2Objects1[k] = gdjs.mainCode.GDmetal2Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDmetal2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainCode.GDmetal3Objects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDmetal3Objects1[i].getVariableNumber(gdjs.mainCode.GDmetal3Objects1[i].getVariables().get("collected")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDmetal3Objects1[k] = gdjs.mainCode.GDmetal3Objects1[i];
        ++k;
    }
}
gdjs.mainCode.GDmetal3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15769052);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDmetal1Objects1 */
/* Reuse gdjs.mainCode.GDmetal2Objects1 */
/* Reuse gdjs.mainCode.GDmetal3Objects1 */
/* Reuse gdjs.mainCode.GDplayer_95spriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(5)).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "sound\\collect.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.mainCode.GDmetal1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmetal2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmetal3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(1)).add(1);
}
}}

}


{



}


{


const repeatCount2 = 500;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.mainCode.GDglass1Objects2.length = 0;

gdjs.mainCode.GDglass2Objects2.length = 0;

gdjs.mainCode.GDglass3Objects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13446500);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass1Objects2ObjectsGDgdjs_46mainCode_46GDglass2Objects2ObjectsGDgdjs_46mainCode_46GDglass3Objects2Objects, "glass" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(-(5000), 5000), gdjs.randomInRange(-(5000), 5000), "");
}}
}

}


{


const repeatCount2 = 500;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.mainCode.GDplastic1Objects2.length = 0;

gdjs.mainCode.GDplastic2Objects2.length = 0;

gdjs.mainCode.GDplastic3Objects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12531308);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic1Objects2ObjectsGDgdjs_46mainCode_46GDplastic2Objects2ObjectsGDgdjs_46mainCode_46GDplastic3Objects2Objects, "plastic" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(-(5000), 5000), gdjs.randomInRange(-(5000), 5000), "");
}}
}

}


{


const repeatCount2 = 500;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.mainCode.GDpaper1Objects2.length = 0;

gdjs.mainCode.GDpaper2Objects2.length = 0;

gdjs.mainCode.GDpaper3Objects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14257060);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper1Objects2ObjectsGDgdjs_46mainCode_46GDpaper2Objects2ObjectsGDgdjs_46mainCode_46GDpaper3Objects2Objects, "paper" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(-(5000), 5000), gdjs.randomInRange(-(5000), 5000), "");
}}
}

}


{


const repeatCount2 = 500;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.mainCode.GDmetal1Objects2.length = 0;

gdjs.mainCode.GDmetal2Objects2.length = 0;

gdjs.mainCode.GDmetal3Objects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14581140);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal1Objects2ObjectsGDgdjs_46mainCode_46GDmetal2Objects2ObjectsGDgdjs_46mainCode_46GDmetal3Objects2Objects, "metal" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(-(5000), 5000), gdjs.randomInRange(-(5000), 5000), "");
}}
}

}


{


const repeatCount2 = 500;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.mainCode.GDbomb1Objects2.length = 0;

gdjs.mainCode.GDbomb2Objects2.length = 0;

gdjs.mainCode.GDbomb3Objects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12460964);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb1Objects2ObjectsGDgdjs_46mainCode_46GDbomb2Objects2ObjectsGDgdjs_46mainCode_46GDbomb3Objects2Objects, "bomb" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(-(5000), 5000), gdjs.randomInRange(-(5000), 5000), "");
}}
}

}


{


const repeatCount2 = 500;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.mainCode.GDenemy1Objects2.length = 0;

gdjs.mainCode.GDenemy2Objects2.length = 0;

gdjs.mainCode.GDenemy3Objects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9580692);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy1Objects2ObjectsGDgdjs_46mainCode_46GDenemy2Objects2ObjectsGDgdjs_46mainCode_46GDenemy3Objects2Objects, "enemy" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(-(5000), 5000), gdjs.randomInRange(-(5000), 5000), "");
}{for(var i = 0, len = gdjs.mainCode.GDenemy1Objects2.length ;i < len;++i) {
    gdjs.mainCode.GDenemy1Objects2[i].setScale(gdjs.mainCode.GDenemy1Objects2[i].getScale() * (gdjs.randomInRange(1, 1.5)));
}
for(var i = 0, len = gdjs.mainCode.GDenemy2Objects2.length ;i < len;++i) {
    gdjs.mainCode.GDenemy2Objects2[i].setScale(gdjs.mainCode.GDenemy2Objects2[i].getScale() * (gdjs.randomInRange(1, 1.5)));
}
for(var i = 0, len = gdjs.mainCode.GDenemy3Objects2.length ;i < len;++i) {
    gdjs.mainCode.GDenemy3Objects2[i].setScale(gdjs.mainCode.GDenemy3Objects2[i].getScale() * (gdjs.randomInRange(1, 1.5)));
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bomb1"), gdjs.mainCode.GDbomb1Objects1);
gdjs.copyArray(runtimeScene.getObjects("bomb2"), gdjs.mainCode.GDbomb2Objects1);
gdjs.copyArray(runtimeScene.getObjects("bomb3"), gdjs.mainCode.GDbomb3Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy1"), gdjs.mainCode.GDenemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.mainCode.GDenemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy3"), gdjs.mainCode.GDenemy3Objects1);
gdjs.copyArray(runtimeScene.getObjects("floor_chain"), gdjs.mainCode.GDfloor_95chainObjects1);
gdjs.copyArray(runtimeScene.getObjects("glass1"), gdjs.mainCode.GDglass1Objects1);
gdjs.copyArray(runtimeScene.getObjects("glass2"), gdjs.mainCode.GDglass2Objects1);
gdjs.copyArray(runtimeScene.getObjects("glass3"), gdjs.mainCode.GDglass3Objects1);
gdjs.copyArray(runtimeScene.getObjects("metal1"), gdjs.mainCode.GDmetal1Objects1);
gdjs.copyArray(runtimeScene.getObjects("metal2"), gdjs.mainCode.GDmetal2Objects1);
gdjs.copyArray(runtimeScene.getObjects("metal3"), gdjs.mainCode.GDmetal3Objects1);
gdjs.copyArray(runtimeScene.getObjects("paper1"), gdjs.mainCode.GDpaper1Objects1);
gdjs.copyArray(runtimeScene.getObjects("paper2"), gdjs.mainCode.GDpaper2Objects1);
gdjs.copyArray(runtimeScene.getObjects("paper3"), gdjs.mainCode.GDpaper3Objects1);
gdjs.copyArray(runtimeScene.getObjects("plastic1"), gdjs.mainCode.GDplastic1Objects1);
gdjs.copyArray(runtimeScene.getObjects("plastic2"), gdjs.mainCode.GDplastic2Objects1);
gdjs.copyArray(runtimeScene.getObjects("plastic3"), gdjs.mainCode.GDplastic3Objects1);
{for(var i = 0, len = gdjs.mainCode.GDglass1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass1Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDglass2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass2Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDglass3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass3Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDplastic1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic1Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDplastic2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic2Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDplastic3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic3Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDpaper1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper1Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDpaper2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper2Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDpaper3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper3Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDmetal1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal1Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDmetal2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal2Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDmetal3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal3Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDfloor_95chainObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDfloor_95chainObjects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDbomb1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb1Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDbomb2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb2Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDbomb3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb3Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDenemy1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy1Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy2Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
for(var i = 0, len = gdjs.mainCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy3Objects1[i].setAngle(gdjs.randomInRange(-(20), 20));
}
}{for(var i = 0, len = gdjs.mainCode.GDglass1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass1Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass1Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDglass2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass2Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass2Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDglass3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDglass3Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDglass3Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDplastic1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic1Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic1Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDplastic2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic2Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic2Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDplastic3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDplastic3Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDplastic3Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDpaper1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper1Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper1Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDpaper2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper2Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper2Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDpaper3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDpaper3Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDpaper3Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDmetal1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal1Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal1Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDmetal2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal2Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal2Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDmetal3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmetal3Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDmetal3Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDbomb1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb1Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb1Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDbomb2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb2Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb2Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDbomb3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDbomb3Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbomb3Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDenemy1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy1Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy1Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy2Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy2Objects1Objects, false);
}
for(var i = 0, len = gdjs.mainCode.GDenemy3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDenemy3Objects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDenemy3Objects1Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("void_color"), gdjs.mainCode.GDvoid_95colorObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].separateFromObjectsList(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDvoid_9595colorObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.mainCode.GDvoid_95colorObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDvoid_95colorObjects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDplayer_95spriteObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(7)) >= 2000 ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDplayer_95spriteObjects1[k] = gdjs.mainCode.GDplayer_95spriteObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDplayer_95spriteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.mainCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.mainCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.mainCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player_sprite"), gdjs.mainCode.GDplayer_95spriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplayer_95spriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplayer_95spriteObjects1[i].returnVariable(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(7)).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(3))) + (gdjs.RuntimeObject.getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(4))) + (gdjs.RuntimeObject.getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(6))) + (gdjs.RuntimeObject.getVariableNumber(gdjs.mainCode.GDplayer_95spriteObjects1[i].getVariables().getFromIndex(5))));
}
}}

}


{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.mainCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.mainCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "HUD", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, false, "Border", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, false, "Transition", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDtransitionObjects1.length = 0;
gdjs.mainCode.GDtransitionObjects2.length = 0;
gdjs.mainCode.GDplayer_95spriteObjects1.length = 0;
gdjs.mainCode.GDplayer_95spriteObjects2.length = 0;
gdjs.mainCode.GDbomb1Objects1.length = 0;
gdjs.mainCode.GDbomb1Objects2.length = 0;
gdjs.mainCode.GDbomb2Objects1.length = 0;
gdjs.mainCode.GDbomb2Objects2.length = 0;
gdjs.mainCode.GDbomb3Objects1.length = 0;
gdjs.mainCode.GDbomb3Objects2.length = 0;
gdjs.mainCode.GDenemy1Objects1.length = 0;
gdjs.mainCode.GDenemy1Objects2.length = 0;
gdjs.mainCode.GDenemy2Objects1.length = 0;
gdjs.mainCode.GDenemy2Objects2.length = 0;
gdjs.mainCode.GDenemy3Objects1.length = 0;
gdjs.mainCode.GDenemy3Objects2.length = 0;
gdjs.mainCode.GDhud_95oxygenObjects1.length = 0;
gdjs.mainCode.GDhud_95oxygenObjects2.length = 0;
gdjs.mainCode.GDhud_95healthObjects1.length = 0;
gdjs.mainCode.GDhud_95healthObjects2.length = 0;
gdjs.mainCode.GDhud_95htextObjects1.length = 0;
gdjs.mainCode.GDhud_95htextObjects2.length = 0;
gdjs.mainCode.GDhud_95otextObjects1.length = 0;
gdjs.mainCode.GDhud_95otextObjects2.length = 0;
gdjs.mainCode.GDhud_95paperObjects1.length = 0;
gdjs.mainCode.GDhud_95paperObjects2.length = 0;
gdjs.mainCode.GDhud_95plasticObjects1.length = 0;
gdjs.mainCode.GDhud_95plasticObjects2.length = 0;
gdjs.mainCode.GDhud_95glassObjects1.length = 0;
gdjs.mainCode.GDhud_95glassObjects2.length = 0;
gdjs.mainCode.GDhud_95metalObjects1.length = 0;
gdjs.mainCode.GDhud_95metalObjects2.length = 0;
gdjs.mainCode.GDhud_95resetgameObjects1.length = 0;
gdjs.mainCode.GDhud_95resetgameObjects2.length = 0;
gdjs.mainCode.GDhud_95whitelineObjects1.length = 0;
gdjs.mainCode.GDhud_95whitelineObjects2.length = 0;
gdjs.mainCode.GDdrop_95glassObjects1.length = 0;
gdjs.mainCode.GDdrop_95glassObjects2.length = 0;
gdjs.mainCode.GDdrop_95plasticObjects1.length = 0;
gdjs.mainCode.GDdrop_95plasticObjects2.length = 0;
gdjs.mainCode.GDdrop_95paperObjects1.length = 0;
gdjs.mainCode.GDdrop_95paperObjects2.length = 0;
gdjs.mainCode.GDdrop_95metalObjects1.length = 0;
gdjs.mainCode.GDdrop_95metalObjects2.length = 0;
gdjs.mainCode.GDweed1Objects1.length = 0;
gdjs.mainCode.GDweed1Objects2.length = 0;
gdjs.mainCode.GDweed2Objects1.length = 0;
gdjs.mainCode.GDweed2Objects2.length = 0;
gdjs.mainCode.GDweed3Objects1.length = 0;
gdjs.mainCode.GDweed3Objects2.length = 0;
gdjs.mainCode.GDvoid_95colorObjects1.length = 0;
gdjs.mainCode.GDvoid_95colorObjects2.length = 0;
gdjs.mainCode.GDglass1Objects1.length = 0;
gdjs.mainCode.GDglass1Objects2.length = 0;
gdjs.mainCode.GDglass2Objects1.length = 0;
gdjs.mainCode.GDglass2Objects2.length = 0;
gdjs.mainCode.GDglass3Objects1.length = 0;
gdjs.mainCode.GDglass3Objects2.length = 0;
gdjs.mainCode.GDplastic1Objects1.length = 0;
gdjs.mainCode.GDplastic1Objects2.length = 0;
gdjs.mainCode.GDplastic2Objects1.length = 0;
gdjs.mainCode.GDplastic2Objects2.length = 0;
gdjs.mainCode.GDplastic3Objects1.length = 0;
gdjs.mainCode.GDplastic3Objects2.length = 0;
gdjs.mainCode.GDpaper1Objects1.length = 0;
gdjs.mainCode.GDpaper1Objects2.length = 0;
gdjs.mainCode.GDpaper2Objects1.length = 0;
gdjs.mainCode.GDpaper2Objects2.length = 0;
gdjs.mainCode.GDpaper3Objects1.length = 0;
gdjs.mainCode.GDpaper3Objects2.length = 0;
gdjs.mainCode.GDmetal1Objects1.length = 0;
gdjs.mainCode.GDmetal1Objects2.length = 0;
gdjs.mainCode.GDmetal2Objects1.length = 0;
gdjs.mainCode.GDmetal2Objects2.length = 0;
gdjs.mainCode.GDmetal3Objects1.length = 0;
gdjs.mainCode.GDmetal3Objects2.length = 0;
gdjs.mainCode.GDbackgroundObjects1.length = 0;
gdjs.mainCode.GDbackgroundObjects2.length = 0;
gdjs.mainCode.GDforegroundObjects1.length = 0;
gdjs.mainCode.GDforegroundObjects2.length = 0;
gdjs.mainCode.GDgradientObjects1.length = 0;
gdjs.mainCode.GDgradientObjects2.length = 0;
gdjs.mainCode.GDfloor_95chainObjects1.length = 0;
gdjs.mainCode.GDfloor_95chainObjects2.length = 0;

gdjs.mainCode.eventsList12(runtimeScene);

return;

}

gdjs['mainCode'] = gdjs.mainCode;
