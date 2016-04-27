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

package org.apache.flex.compiler.internal.fxg.dom.types;

/**
 * The DigitWidth class.
 * 
 * <pre>
 *   0 = default
 *   1 = proportional
 *   2 = tabular
 * </pre>
 */
public enum DigitWidth
{
    /**
     * The enum representing an 'default' DigitWidth.
     */
    DEFAULT,

    /**
     * The enum representing an 'proportional' DigitWidth.
     */    
    PROPORTIONAL,
    
    /**
     * The enum representing an 'tabular' DigitWidth.
     */
    TABULAR;
}