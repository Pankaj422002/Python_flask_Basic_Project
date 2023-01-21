from app import app,request,Posts,db,cross_origin

@app.route('/api/addpost',methods=['POST'])
@cross_origin()
def addpost():
    if (request.method == 'POST'):
        print('this is post request')
        data = request.get_json()
        title=data['title']
        msg = data['msg']
        post = Posts(title=title,msg=msg)
        db.session.add(post)
        db.session.commit()
        return data
    else:
        return "error in posting data"