gdjs.Game_32EndCode = {};
gdjs.Game_32EndCode.localVariables = [];
gdjs.Game_32EndCode.GDPlayerObjects1= [];
gdjs.Game_32EndCode.GDPlayerObjects2= [];
gdjs.Game_32EndCode.GDEnemyObjects1= [];
gdjs.Game_32EndCode.GDEnemyObjects2= [];
gdjs.Game_32EndCode.GDLevelObjects1= [];
gdjs.Game_32EndCode.GDLevelObjects2= [];
gdjs.Game_32EndCode.GDSpikesObjects1= [];
gdjs.Game_32EndCode.GDSpikesObjects2= [];
gdjs.Game_32EndCode.GDCameraCenterObjects1= [];
gdjs.Game_32EndCode.GDCameraCenterObjects2= [];
gdjs.Game_32EndCode.GDFireObjects1= [];
gdjs.Game_32EndCode.GDFireObjects2= [];
gdjs.Game_32EndCode.GDLargeTilesObjects1= [];
gdjs.Game_32EndCode.GDLargeTilesObjects2= [];
gdjs.Game_32EndCode.GDShadowObjects1= [];
gdjs.Game_32EndCode.GDShadowObjects2= [];
gdjs.Game_32EndCode.GDBlackObjects1= [];
gdjs.Game_32EndCode.GDBlackObjects2= [];
gdjs.Game_32EndCode.GDLeaveGameButtonObjects1= [];
gdjs.Game_32EndCode.GDLeaveGameButtonObjects2= [];


gdjs.Game_32EndCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.Game_32EndCode.GDFireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32EndCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32EndCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32EndCode.GDPlayerObjects1[i].getX() > (( gdjs.Game_32EndCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.Game_32EndCode.GDFireObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32EndCode.GDPlayerObjects1[k] = gdjs.Game_32EndCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32EndCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CameraCenter"), gdjs.Game_32EndCode.GDCameraCenterObjects1);
/* Reuse gdjs.Game_32EndCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32EndCode.GDCameraCenterObjects1.length ;i < len;++i) {
    gdjs.Game_32EndCode.GDCameraCenterObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "56;107;167");
}{for(var i = 0, len = gdjs.Game_32EndCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32EndCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32EndCode.GDCameraCenterObjects1.length !== 0 ? gdjs.Game_32EndCode.GDCameraCenterObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Game_32EndCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32EndCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationSpeedScale(0.9);
}
}}

}


};

gdjs.Game_32EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32EndCode.GDPlayerObjects1.length = 0;
gdjs.Game_32EndCode.GDPlayerObjects2.length = 0;
gdjs.Game_32EndCode.GDEnemyObjects1.length = 0;
gdjs.Game_32EndCode.GDEnemyObjects2.length = 0;
gdjs.Game_32EndCode.GDLevelObjects1.length = 0;
gdjs.Game_32EndCode.GDLevelObjects2.length = 0;
gdjs.Game_32EndCode.GDSpikesObjects1.length = 0;
gdjs.Game_32EndCode.GDSpikesObjects2.length = 0;
gdjs.Game_32EndCode.GDCameraCenterObjects1.length = 0;
gdjs.Game_32EndCode.GDCameraCenterObjects2.length = 0;
gdjs.Game_32EndCode.GDFireObjects1.length = 0;
gdjs.Game_32EndCode.GDFireObjects2.length = 0;
gdjs.Game_32EndCode.GDLargeTilesObjects1.length = 0;
gdjs.Game_32EndCode.GDLargeTilesObjects2.length = 0;
gdjs.Game_32EndCode.GDShadowObjects1.length = 0;
gdjs.Game_32EndCode.GDShadowObjects2.length = 0;
gdjs.Game_32EndCode.GDBlackObjects1.length = 0;
gdjs.Game_32EndCode.GDBlackObjects2.length = 0;
gdjs.Game_32EndCode.GDLeaveGameButtonObjects1.length = 0;
gdjs.Game_32EndCode.GDLeaveGameButtonObjects2.length = 0;

gdjs.Game_32EndCode.eventsList0(runtimeScene);
gdjs.Game_32EndCode.GDPlayerObjects1.length = 0;
gdjs.Game_32EndCode.GDPlayerObjects2.length = 0;
gdjs.Game_32EndCode.GDEnemyObjects1.length = 0;
gdjs.Game_32EndCode.GDEnemyObjects2.length = 0;
gdjs.Game_32EndCode.GDLevelObjects1.length = 0;
gdjs.Game_32EndCode.GDLevelObjects2.length = 0;
gdjs.Game_32EndCode.GDSpikesObjects1.length = 0;
gdjs.Game_32EndCode.GDSpikesObjects2.length = 0;
gdjs.Game_32EndCode.GDCameraCenterObjects1.length = 0;
gdjs.Game_32EndCode.GDCameraCenterObjects2.length = 0;
gdjs.Game_32EndCode.GDFireObjects1.length = 0;
gdjs.Game_32EndCode.GDFireObjects2.length = 0;
gdjs.Game_32EndCode.GDLargeTilesObjects1.length = 0;
gdjs.Game_32EndCode.GDLargeTilesObjects2.length = 0;
gdjs.Game_32EndCode.GDShadowObjects1.length = 0;
gdjs.Game_32EndCode.GDShadowObjects2.length = 0;
gdjs.Game_32EndCode.GDBlackObjects1.length = 0;
gdjs.Game_32EndCode.GDBlackObjects2.length = 0;
gdjs.Game_32EndCode.GDLeaveGameButtonObjects1.length = 0;
gdjs.Game_32EndCode.GDLeaveGameButtonObjects2.length = 0;


return;

}

gdjs['Game_32EndCode'] = gdjs.Game_32EndCode;
