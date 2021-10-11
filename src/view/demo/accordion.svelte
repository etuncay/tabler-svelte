<script>
	import { templateStore } from '../../template/template-store';    
    templateStore.set({
        pretitle:'',
        title: 'Accordion Page'
    })
	import { TblrAccordion, TblrAccordionItem } from "../../components/index";
</script>
<div class="page-body">
	<div class="container-xl">
		<div class="card">
			<div class="card-body">
				<TblrAccordion>
					<TblrAccordionItem title="Accordion Item #1" expanded="false">
						<strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</TblrAccordionItem>
					<TblrAccordionItem title="Accordion Item #2">
						<strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</TblrAccordionItem>
					<TblrAccordionItem title="Accordion Item #3">
						<strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</TblrAccordionItem>
					<TblrAccordionItem title="Accordion Item #4">
						<strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</TblrAccordionItem>
				</TblrAccordion>
			</div>
		</div>
	</div>
</div>