import React, { useCallback, useMemo, Fragment, memo } from 'react'

function CallbackCompnent() {
	return (
		<Parent term={'abc'}/>
	)
}

function MyBigList({ term, onItemClick }) {
  const items = ['a', 'b']; // assume big list of item
  const map = (item, s) => <div onClick={onItemClick} key={s}>{item}</div>;

	return (
		<Fragment>
			When I click'd the following list, random number won't change
			{items.map(map)}

			i'm render, random number to check =  {Math.random()}
		</Fragment>
	);
}

const MemoContent = memo(MyBigList);


function doSomeThing({e, term}) {
	console.log(e);
	console.log('see my term = ', term);
	console.log('on item clicked');
}

// 這邊是使用useCallback的好時機, 因為child component用memo包起來, callback又要往下傳, 這樣可以減少 child component render 次數
function Parent({ term }) {
	const onItemClick = useCallback(
		(e) => {
			return doSomeThing({e, term})
		},
		[term]
	);
	
	const onItemClick2 = useMemo(
		(e) => {
			// 這邊看來拿不到e,
			return doSomeThing.bind(this, {e, term})
		},
		[term]
	);

	return (
		<MemoContent
		term={term}
		// 使用   onItemClick or onItemClick2都可以呼叫到do some thing
		onItemClick={onItemClick}
    />
	)
}

export default CallbackCompnent