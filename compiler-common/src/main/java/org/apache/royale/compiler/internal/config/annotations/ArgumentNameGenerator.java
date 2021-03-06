/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

package org.apache.royale.compiler.internal.config.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * This annotation allows a programmatic interface for generating argument 
 * names. Use this annotation when your argument names are more complex than
 * allowed by @{@link Arguments}. 
 * 
 * <p>
 * To use, provide a Class to the annotation. The Class must contain a method
 * with the following signature:
 * 
 * <pre>
 *    public static String getArgumentName(int argrumentNumber)
 * </pre>
 * 
 * The getArgumentName method is a static function that takes a zero-based 
 * argument number and returns the corresponding name of the argument. 
 * 
 */
@Retention(value = RetentionPolicy.RUNTIME)
@Target(value = ElementType.METHOD)
public @interface ArgumentNameGenerator
{
    /**
     * 
     * @return Class that contains a method
     * with the following signature:
     * 
     * <pre>
     *    public static String getArgumentName(int argrumentNumber)
     * </pre>
     */
    Class<?> value();
}
