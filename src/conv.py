import bpy,sys
bpy.ops.wm.open_mainfile(filepath='/tmp/claude-0/cur/Curiosity Rover (MSL) (Clean).blend')
print('objects',len(bpy.data.objects),'meshes',len(bpy.data.meshes),'actions',len(bpy.data.actions),'images',[(i.name,i.size[:],bool(i.packed_file),i.filepath) for i in bpy.data.images])
print('frame range',bpy.context.scene.frame_start,bpy.context.scene.frame_end,'fps',bpy.context.scene.render.fps)
for a in bpy.data.actions: print(' action',a.name,tuple(a.frame_range))
tris=0
for o in bpy.data.objects:
    if o.type=='MESH': tris+=sum(len(p.vertices)-2 for p in o.data.polygons)
print('tris',tris)
for o in bpy.data.objects:
    if o.parent is None: print('root',o.name,o.type,[round(v,2) for v in o.location],[round(v,2) for v in o.scale])
bpy.ops.export_scene.gltf(filepath='/tmp/claude-0/cur/curiosity_src.glb',export_format='GLB',export_animations=True,export_apply=False,export_yup=True,export_image_format='AUTO')
