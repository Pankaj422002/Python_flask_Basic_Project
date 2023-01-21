from app import app,request,Posts,cross_origin,jsonify
import json

@app.route('/api/getposts',methods=['GET'])
@cross_origin()
def getposts():
    if (request.method == 'GET'):
        print('this is get request')
        allposts = Posts.query.all()
        postList=[]
        for post in allposts:
            postList.append({
                "title":post.title,
                "msg":post.msg,
                "sno":post.sno,
                "Likes":post.Likes,
                "date_created":post.date_created
            })
        # posts = posts.__dict__
        return postList



