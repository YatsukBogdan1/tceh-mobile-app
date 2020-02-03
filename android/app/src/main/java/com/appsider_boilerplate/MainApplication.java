package com.appsider_boilerplate;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import android.content.Context;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import java.lang.reflect.InvocationTargetException;

import java.util.ArrayList;
import java.util.List;

import androidx.annotation.Nullable;

public class MainApplication extends NavigationApplication {

    @Override
    public void onCreate() {
        super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this); // Remove this line if you don't want Flipper enabled
    }

    @Override
    protected ReactNativeHost createReactNativeHost() {
        return new NavigationReactNativeHost(this) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        List<ReactPackage> packages = new ArrayList<>();
        return packages;
    }

    /**
       * Loads Flipper in React Native templates.
       *
       * @param context
       */
      private static void initializeFlipper(Context context) {
        if (BuildConfig.DEBUG) {
          try {
            /*
             We use reflection here to pick up the class that initializes Flipper,
            since Flipper library is not available in release mode
            */
            Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
            aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
          } catch (ClassNotFoundException e) {
            e.printStackTrace();
          } catch (NoSuchMethodException e) {
            e.printStackTrace();
          } catch (IllegalAccessException e) {
            e.printStackTrace();
          } catch (InvocationTargetException e) {
            e.printStackTrace();
          }
        }
      }
}
