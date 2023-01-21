from app import app,request,Posts,cross_origin

@app.route('/api/nooflikesinpost/<int:snoofpost>',methods=['GET'])
@cross_origin()
def countLikes(snoofpost):
    if (request.method == 'GET'):
        print('this is get request')
        post = Posts.query.filter_by(sno=snoofpost).first()
        noOfLikes = post.Likes
        print('nooflikes: ',noOfLikes)
        # x = post.get_json()
        return str(noOfLikes)
    else:
        return "error in like post"