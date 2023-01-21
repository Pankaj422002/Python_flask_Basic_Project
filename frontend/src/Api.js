import React from 'react'
import {apiUrl} from './config.js'
import axios from 'axios'

export const addPost = async({title,msg}) => {
    try{
        const response = await axios({
            url: `${apiUrl}/api/addpost`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data:{
                "title":title,
                "msg":msg
            },
        });
        // console.log(response);
        if(response.status >=200 && response.status <=300){
            console.log(response.data); 
            window.location.reload();
        }else{
            throw new Error(response.data.message);
        }

    }catch(err){
        console.log(err);
        return {error: err.response.data.message || err.message};
    }
}

export const getPosts = async() => {
    try{
        const response = await axios({
            url: `${apiUrl}/api/getposts`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        // console.log(response);
        if(response.status >=200 && response.status <=300){
            // console.log("getpost",response.data);
            return response.data           
        }else{
            throw new Error(response.data.message);
        }

    }catch(err){
        console.log("err is:" , err);
        return {error: err.response.data.message || err.message};
    }
}


export const likePost = async(sno) => {
    try{
        const response = await axios({
            url: `${apiUrl}/api/likepost/${sno}`,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        // console.log(response);
        if(response.status >=200 && response.status <=300){
            // console.log("getpost",response.data);
            console.log(response.data);
            window.location.reload();
            // return response.data           
        }else{
            throw new Error(response.data.message);
        }

    }catch(err){
        console.log("err is:" , err);
        return {error: err.response.data.message || err.message};
    }
}
