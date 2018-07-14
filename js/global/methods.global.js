import React, { Component } from 'react';

const GM = {
    showLog: (msg) => {
        console.log(msg);
    },

    callApi: (baseUrl, methodType, headers, formBody, props) => {

        return new Promise((resolve, reject) => {
            fetch(baseUrl, {
                method: methodType,
                headers: headers,
                body: formBody
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    resolve(responseJson)
                })
                .catch((e) => {
                    reject(e)
                })
        })
    },

    transformReqData(key, subData) { return key + "=" + JSON.stringify(subData); },

    showNetworkAlert: () => {
        let msg = 'Please check your internet connection and try again!';
        Alert.alert(
            'Mission Marketplace',
            '' + msg, [{
                text: 'OK',
                onPress: () => {
                    GB.showLog('OK Pressed')
                }
            },], {
                cancelable: false
            }
        )
    },
    
    geImageType: (file) => {

        let extension = 'jpeg', _;

        try {
            [_, extension] = file.match(/\.(\w+)$/);
        } catch (error) {
            extension = 'jpeg';
        }

        return `image/${extension}`;

    },

    toDataUrl: (url, callback) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            const reader = new FileReader();
            reader.onloadend = () => {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    },

    savePref: (key, value) => {
        AsyncStorage.setItem(key, JSON.stringify(value), (err) => { });
    },

    getPref: (key) => {

        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (err, result) => {
                if (result) {
                    resolve(JSON.parse(result));
                } else {
                    reject(false);
                }
            });
        });
    },

    multiGetPref: () => {

        return new Promise((resolve, reject) => {
            //you can also pass your own array of keys to get the results only 
            //for the keys you passed. In that case remove the function getAllKeys
            //and pass keys as parameter to multiGetPref(keys)
            AsyncStorage.getAllKeys((err, keys) => {
                AsyncStorage.multiGet(keys, (err, stores) => {
                    if (stores) {
                        resolve(stores);
                    } else {
                        reject(false);
                    }
                    //   stores.map((result, i, store) => {
                    //     // get at each store's key/value so you can work with it
                    //     let key = store[i][0];
                    //     let value = store[i][1];
                    //   });
                });
            });
        })
    },

    removePref: (key) => {
        AsyncStorage.removeItem(key, (err) => { });
    },

    removeAllPref: (keyArray) => {
        AsyncStorage.multiRemove(keyArray, (err) => { });
    },
};

export default GM;