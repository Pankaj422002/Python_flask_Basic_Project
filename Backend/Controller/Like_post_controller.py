from app import app,request,Posts,db,cross_origin

@app.route('/api/likepost/<int:snoforlike>',methods=['PATCH'])
@cross_origin()
def likepost(snoforlike):
    if (request.method == 'PATCH'):
        print('this is update request')
        post = Posts.query.filter_by(sno=snoforlike).first()
        if(post.Likes==0):
            post.Likes+=1
        else:
            post.Likes-=1
        db.session.add(post)
        db.session.commit()
        # x = post.get_json()
        return "Liked successfully"
    else:
        return "error in like post"

