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

package org.apache.royale.swf.types;

import java.util.ArrayList;

/**
 * Not that this array holds ILineStyle, to the elements can be different
 */
public class LineStyleArray extends ArrayList<ILineStyle> implements IDataType
{
    private static final long serialVersionUID = 3425422361851358523L;

    /**
     * Create a LineStyleArray with specified initial capacity.
     * 
     * @param initialCapacity initial capacity
     */
    public LineStyleArray(int initialCapacity)
    {
        super(initialCapacity);
    }

    public LineStyleArray()
    {
        super();
    }

}
