package com.sadcoat.bugfender;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;

import java.io.IOException;

import com.bugfender.sdk.Bugfender;

public class BugfenderModule extends ReactContextBaseJavaModule {

    public BugfenderModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Bugfender";
    }

    @ReactMethod
    public void setApiKey(String apiKey) {
        Bugfender.init(getReactApplicationContext(), apiKey, BuildConfig.DEBUG);
        Bugfender.enableLogcatLogging();
        //Bugfender.enableUIEventLogging(getReactApplicationContext())
    }

    @ReactMethod
    public void log(int level, String tag, String message) {
        Log.println(level, tag != null && tag.length() > 0 ? tag : this.getName(), message);
    }

    @ReactMethod
    public void sendIssue(String title, String message) {
        Bugfender.sendIssue(title, message);
    }
    
    @ReactMethod
    public void setDeviceString(String key, String value) {
        Bugfender.setDeviceString(key, value);
    }

    @ReactMethod
    public void setDeviceInteger(String key, int value) {
        Bugfender.setDeviceInteger(key, value);
    }

    @ReactMethod
    public void setDeviceBoolean(String key, boolean value) {
        Bugfender.setDeviceBoolean(key, value);
    }

    @ReactMethod
    public void setDeviceFloat(String key, float value) {
        Bugfender.setDeviceFloat(key, value);
    }

}