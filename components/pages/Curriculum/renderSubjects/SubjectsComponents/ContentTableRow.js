export default function ContentTableRow(props) {
    return (
        <div class="grid grid-cols-3 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                    <div class="text-gray-500 dark:text-gray-400">{props.sidetitle}</div>
                        <div>
                            {props.col2}
                        </div>
                        <div>
                            {props.col3}
                        </div>
                    
        </div>
        
    )
}